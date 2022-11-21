import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  Droppable,
  DropResult,
  NotDraggingStyle
} from "@hello-pangea/dnd";
import { Box, Checkbox, Paper } from "@mui/material";
import { useDispatch, useSelector, RootState } from '../../service/store'
import ReorderIcon from "@mui/icons-material/Reorder";
import { IpositionData } from "../../interface";

interface Item {
  id: string;
  content: string;
}

// // fake data generator
// const getItems = (count: number): Item[] =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k}`,
//     content: `item ${k}`
//   }));

// a little function to help us with reordering the result
const reorder = (
  list: IpositionData[],
  startIndex: number,
  endIndex: number
): IpositionData[] => {
  console.log('s: ' + startIndex)
  console.log('e: ' + endIndex)
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  result[endIndex].position = endIndex.toString()
  return result;
};

const grid = 8;

const getItemStyle = (
  isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
  themeState: boolean
): React.CSSProperties => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  borderRadius: '5px',
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: themeState ?
    isDragging ? "#9bbde46e" : "#9bbde4" :
    isDragging ? "#8484846e" : "#848484",
  color: themeState ?
    isDragging ? "#0000006e" : "#000000" :
    isDragging ? "#ffffff6e" : "#ffffff",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = (isDraggingOver: boolean, themeState: boolean): React.CSSProperties => ({
  // background: isDraggingOver ? "lightblue" : "lightgrey",
  background: themeState ? "#e8e8e8" : "#383838",
  marginTop: '20px',
  padding: grid,
  width: 250,
  borderRadius: '3px',
  boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%'
});
interface PostsProps {
  positionDatas: IpositionData[]
}

// const Posts: FC<PostsProps> =
export const TableDnD: FC<PostsProps> = ({ positionDatas }) => {
  const [state, setState] = useState(positionDatas.sort((a, b) => parseInt(a.position) - parseInt(b.position)));
  const themeState = useSelector((state: RootState) => state.themeState)

  const onDragEnd = (result: DropResult): void => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items: IpositionData[] = reorder(
      state,
      result.source.index,
      result.destination.index
    );

    setState(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot): JSX.Element => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver, themeState)}
          >
            {/* <Paper elevation={5} sx={{
              // padding: '10px'
              padding: grid,
              width: 250,
            }}> */}
            {state.map((item, index) => (
              <Draggable key={item.uid} draggableId={item.uid} index={index}>
                {(provided, snapshot): JSX.Element => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style,
                      themeState
                    )}
                  >
                    <Box sx={{
                      display: "inline-block",
                      float: "left",
                      verticalAlign: "top",
                      cursor: "grab"
                    }}>
                      <ReorderIcon />
                      {item.uid == '4' ?
                        <Checkbox sx={{
                          p: '0',
                          pl: '2px',
                          verticalAlign: 'top',
                          // color: "gray"
                        }} disabled checked /> :
                        <Checkbox sx={{
                          p: '0',
                          pl: '2px',
                          verticalAlign: 'top'
                        }} defaultChecked
                          onChange={(event) => {
                            if (!event.target.checked)
                              item.enable = false
                          }} />
                      }
                      {/* <Checkbox sx={{
                        p: '0',
                        pl: '2px',
                        verticalAlign: 'top'
                      }} checked /> */}
                    </Box>
                    {item.name}
                  </div>
                )}
              </Draggable>
            ))}
            {/* </Paper> */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
