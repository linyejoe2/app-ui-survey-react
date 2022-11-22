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
import { IpositionData, ISurveyProps, TBar, TPosition } from "../../interface";

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
export const TableDnD: FC<ISurveyProps> = (props: ISurveyProps) => {
  // const [state, setState] = useState(positionDatas.sort((a, b) => parseInt(a.position) - parseInt(b.position)));
  const themeState = useSelector((state: RootState) => state.themeState)

  const onDragEnd = (result: DropResult): void => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    console.log("result.source.droppableId: " + result.source.droppableId)

    let temp = props.state
    if (result.destination.index < result.source.index) {
      for (const ele of temp.UIStyle!.values()) {
        if (ele.Position < result.destination.index || ele.Position > result.source.index) {

        } else if (ele.Position >= result.destination.index && ele.Position < result.source.index) {
          ele.Position += 1
        } else if (ele.Position == result.source.index) {
          ele.Position = result.destination.index as TPosition
        }
      }
    } else if (result.destination.index > result.source.index) {
      for (const ele of temp.UIStyle!.values()) {
        if (ele.Position < result.source.index || ele.Position > result.destination.index) {

        } else if (ele.Position >= result.source.index && ele.Position < result.destination.index) {
          ele.Position -= 1
        } else if (ele.Position == result.source.index) {
          ele.Position = result.destination.index as TPosition
        }
      }
    }
    // temp.UIStyle!.get(result.draggableId as TBar)!.Position = result.destination.index as TPosition

    // const items: IpositionData[] = reorder(
    //   state,
    //   result.source.index,
    //   result.destination.index
    // );

    props.changeSurveyData(temp)
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
            {[...props.state.UIStyle!.entries()].map((item, index) => (
              <Draggable key={index} draggableId={item[0]} index={item[1].Position}>
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
                      {index.toString() == '3' ?
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
                            // if (!event.target.checked)
                            // item[1].Position = 0
                          }} />
                      }
                      {/* <Checkbox sx={{
                        p: '0',
                        pl: '2px',
                        verticalAlign: 'top'
                      }} checked /> */}
                    </Box>
                    {item[0]}
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
