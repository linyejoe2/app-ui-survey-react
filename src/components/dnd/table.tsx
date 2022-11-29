import React, { FC } from 'react'
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  Droppable,
  DropResult,
  NotDraggingStyle
} from '@hello-pangea/dnd'
import { Box, Checkbox, useMediaQuery } from '@mui/material'
import { useSelector, RootState } from '../../service/store'
import ReorderIcon from '@mui/icons-material/Reorder'
import { IpositionData, ISurveyProps, TPosition } from '../../interface'
import { useTranslation } from 'react-i18next'
import PushPinIcon from '@mui/icons-material/PushPin'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'

// a little function to help us with reordering the result
const reorder = (
  list: IpositionData[],
  startIndex: number,
  endIndex: number
): IpositionData[] => {
  // console.log('s: ' + startIndex)
  // console.log('e: ' + endIndex)
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  result[endIndex].position = endIndex.toString() as TPosition
  return result
}

const grid = 8

const getItemStyle = (
  isDragging: boolean,
  onMobile: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
  themeState: boolean
): React.CSSProperties => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  borderRadius: '5px',
  margin: `0 0 ${grid}px 0`,
  height: onMobile ? '50px' : '',
  // change background colour if dragging
  background: themeState
    ? isDragging ? '#9bbde46e' : '#9bbde4'
    : isDragging ? '#8484846e' : '#848484',
  color: themeState
    ? isDragging ? '#0000006e' : '#000000'
    : isDragging ? '#ffffff6e' : '#ffffff',

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = (onMobile: boolean, themeState: boolean): React.CSSProperties => {
  return {
    background: themeState ? '#e8e8e8' : '#383838',
    marginTop: '20px',
    padding: grid,
    width: 250,
    height: onMobile ? '300px' : '100%',
    borderRadius: '3px',
    boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%'
  }
}

// const Posts: FC<PostsProps> =
export const TableDnD: FC<ISurveyProps> = (props: ISurveyProps) => {
  // const [state, setState] = useState(positionDatas.sort((a, b) => parseInt(a.position) - parseInt(b.position)));
  const themeState = useSelector((state: RootState) => state.themeState)
  const { t } = useTranslation()
  const onMobile = useMediaQuery('(max-width:600px)')

  const onDragEnd = (result: DropResult): void => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items: IpositionData[] = reorder(
      props.state.positionDatas,
      result.source.index,
      result.destination.index
    )

    const temp = props.state
    temp.positionDatas = items
    props.changeSurveyData(temp)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot): JSX.Element => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(onMobile, themeState)}
          >
            {props.state.positionDatas.map((item, index) => (
              <Draggable key={item.uid} draggableId={item.uid} index={index}>
                {(provided, snapshot): JSX.Element => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      onMobile,
                      provided.draggableProps.style,
                      themeState
                    )}
                  >
                    <Box sx={{
                      display: 'inline-block',
                      float: 'left',
                      verticalAlign: 'top',
                      cursor: 'grab'
                    }}>
                      <ReorderIcon />
                      {item.uid === '4'
                        ? <>
                          <Checkbox sx={{
                            p: '0',
                            pl: '2px',
                            verticalAlign: 'top'
                            // color: "gray"
                          }} disabled checked />
                          <Checkbox sx={{
                            p: '0',
                            pl: '2px',
                            verticalAlign: 'top'
                          }} icon={<PushPinOutlinedIcon />} checkedIcon={<PushPinIcon />} disabled />
                        </>
                        : <>
                          <Checkbox sx={{
                            p: '0',
                            pl: '2px',
                            verticalAlign: 'top'
                          }} checked={props.state.positionDatas[index].enable}
                            onChange={(event) => {
                              if (!event.target.checked) {
                                item.enable = false
                              } else item.enable = true
                              const temp = props.state
                              temp.positionDatas[index] = item
                              props.changeSurveyData(temp)
                            }} />
                          <Checkbox sx={{
                            p: '0',
                            pl: '2px',
                            verticalAlign: 'top'
                          }}
                            checked={props.state.positionDatas[index].fixed}
                            onChange={(event) => {
                              if (!event.target.checked) {
                                item.fixed = false
                              } else item.fixed = true
                              const temp = props.state
                              temp.positionDatas[index] = item
                              props.changeSurveyData(temp)
                            }}
                            icon={<PushPinOutlinedIcon />} checkedIcon={<PushPinIcon />} />
                        </>
                      }
                      {/* <Checkbox sx={{
                        p: '0',
                        pl: '2px',
                        verticalAlign: 'top'
                      }} checked /> */}
                    </Box>
                    {t(`p4.${item.name}`)}
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
  )
}
