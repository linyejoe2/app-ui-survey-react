import React, { FC } from 'react'
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  Droppable,
  DropResult,
  NotDraggingStyle
} from '@hello-pangea/dnd'
import { Backdrop, Box, Checkbox, IconButton, Typography, useMediaQuery } from '@mui/material'
import { useSelector, RootState } from '../../service/store'
import ReorderIcon from '@mui/icons-material/Reorder'
import { IpositionData, ISurveyProps, TPosition } from '../../interface'
import { useTranslation } from 'react-i18next'
import PushPinIcon from '@mui/icons-material/PushPin'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'

// a little function to help us with reordering the result
// const reorder = (
//   list: IpositionData[],
//   startIndex: number,
//   endIndex: number
// ): IpositionData[] => {
//   const result = Array.from(list)
//   const [removed] = result.splice(startIndex, 1)
//   result.splice(endIndex, 0, removed)
//   result[endIndex].position = endIndex.toString() as TPosition
//   return result
// }

const reStore = (list: IpositionData[]): IpositionData[] => {
  const result = Array.from(list)
  // 排序
  let beforePointer = 0
  for (let i = 0; i < result.length; i++) {
    if (result[i].name === 'content') {
      break
    }
    if (result[i].fixed) {
      const temp = result[beforePointer]
      result[beforePointer] = result[i]
      result[i] = temp
      beforePointer += 1
    }
  }
  let afterPointer = result.length - 1
  for (let i = result.length - 1; i > -1; i--) {
    if (result[i].name === 'content') {
      break
    }
    if (result[i].fixed) {
      const temp = result[afterPointer]
      result[afterPointer] = result[i]
      result[i] = temp
      afterPointer -= 1
    }
  }

  // 修正 position
  let index = 0
  for (let i = 0; i < result.length; i++) {
    index++
    if (!result[i].enable) {
      result[i].position = '0'
      index -= 1
      continue
    }
    result[i].position = (index).toString() as TPosition
  }
  return result
}

const reorder = (
  list: IpositionData[],
  startIndex: number,
  endIndex: number
): IpositionData[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return reStore(result)
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
    width: 300,
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
  const [helpOpen, setHelpOpen] = React.useState('0')

  const handleHelp = (uid: string) => {
    // setHelpOpen(uid)
    props.setHelpBackdropStep!(parseInt(uid) + 2)
  }

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

  const updatePosition = (): void => {
    const temp = props.state
    temp.positionDatas = reStore(temp.positionDatas)
    props.changeSurveyData(temp)
  }

  const CustomBackdrop = () => {
    switch (helpOpen) {
      case '1':
        return (<Backdrop
          sx={{
            color: '#fff',
            zIndex: 999,
            flexDirection: 'column'
          }}
          open={true}
          onClick={() => setHelpOpen('0')}
        >
          <Box>
            <Typography variant='h2'>
              {t('help.title.m')}
            </Typography>
          </Box>
          <Box sx={{ pt: 4 }}>
            <Typography variant='h5'>
              {t('help.title.t')}
            </Typography>
          </Box>
          <Box sx={{ pt: 2 }}>
            <img src="./help/title.svg" alt="img"
              style={{
                width: onMobile ? '300px' : '500px'
                // margin: 20
              }}
            />
          </Box>
        </Backdrop>)
      case '2':
        return (<Backdrop
          sx={{
            color: '#fff',
            zIndex: 999,
            flexDirection: 'column'
          }}
          open={true}
          onClick={() => setHelpOpen('0')}
        >
          <Box>
            <Typography variant='h2'>
              {t('help.function.m')}
            </Typography>
          </Box>
          <Box sx={{ pt: 4 }}>
            <Typography variant='h5'>
              {t('help.function.t')}
            </Typography>
          </Box>
          <Box sx={{ pt: 2 }}>
            <img src="./help/function.svg" alt="img"
              style={{
                width: onMobile ? '300px' : '500px'
                // margin: 20
              }}
            />
          </Box>
        </Backdrop>)
      case '3':
        return (<Backdrop
          sx={{
            color: '#fff',
            zIndex: 999,
            flexDirection: 'column'
          }}
          open={true}
          onClick={() => setHelpOpen('0')}
        >
          <Box>
            <Typography variant='h2'>
              {t('help.short.m')}
            </Typography>
          </Box>
          <Box sx={{ pt: 4 }}>
            <Typography variant='h5'>
              {t('help.short.t')}
            </Typography>
          </Box>
          <Box sx={{ pt: 2 }}>
            <img src="./help/short.svg" alt="img"
              style={{
                width: onMobile ? '300px' : '500px'
                // margin: 20
              }}
            />
          </Box>
        </Backdrop>)
      case '4':
        return (<Backdrop
          sx={{
            color: '#fff',
            zIndex: 999,
            flexDirection: 'column'
          }}
          open={true}
          onClick={() => setHelpOpen('0')}
        >
          <Box>
            <Typography variant='h2'>
              {t('help.content.m')}
            </Typography>
          </Box>
          <Box sx={{ pt: 4 }}>
            <Typography variant='h5'>
              {t('help.content.t')}
            </Typography>
          </Box>
          <Box sx={{ pt: 2 }}>
            <img src="./help/content.svg" alt="img"
              style={{
                width: onMobile ? '300px' : '500px'
                // margin: 20
              }}
            />
          </Box>
        </Backdrop>)
      case '5':
        return (<Backdrop
          sx={{
            color: '#fff',
            zIndex: 999,
            flexDirection: 'column'
          }}
          open={true}
          onClick={() => setHelpOpen('0')}
        >
          <Box>
            <Typography variant='h2'>
              {t('help.nav.m')}
            </Typography>
          </Box>
          <Box sx={{ pt: 4 }}>
            <Typography variant='h5'>
              {t('help.nav.t')}
            </Typography>
          </Box>
          <Box sx={{ pt: 2 }}>
            <img src="./help/nav.svg" alt="img"
              style={{
                width: onMobile ? '300px' : '500px'
                // margin: 20
              }}
            />
          </Box>
        </Backdrop>)
      default:
        return (<></>)
    }
  }

  return (
    <>
      <CustomBackdrop />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot): JSX.Element => (
            <div

              data-tour='4'
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(onMobile, themeState)}
            >
              {props.state.positionDatas.map((item, index) => (
                <Draggable key={item.uid} draggableId={item.uid} index={index}>
                  {(provided, snapshot): JSX.Element => (
                    <div
                      data-tour='5'
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
                      <Box
                        sx={{
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
                            <Checkbox
                              data-tour="6"
                              sx={{
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
                                updatePosition()
                                props.changeSurveyData(temp)
                              }} />
                            <Checkbox
                              data-tour="7"
                              sx={{
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
                                updatePosition()
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
                      <Box
                        sx={{
                          display: 'inline-block',
                          float: 'right',
                          verticalAlign: 'top',
                          cursor: 'grab'
                        }}>
                        <IconButton
                          size="small"
                          title="help bar"
                          data-tour="7-1"
                          onClick={() => handleHelp(item.uid)}
                          // color="inherit"
                          sx={{
                            p: 0,
                            verticalAlign: 'top'
                          }}>
                          <HelpCenterIcon />
                        </IconButton>
                      </Box>
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
    </>
  )
}
