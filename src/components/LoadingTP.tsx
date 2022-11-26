import { Backdrop, CircularProgress, Typography } from "@mui/material";
import React, { FC } from "react";

export const LoadingTP: FC = () => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        flexDirection: "column"
      }}
      open={true}
    // onClick={handleClose}
    >
      <TPText />
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

const src = "好想躺平..."
const srcs = src.split('')
const index2 = 1

const TPText: FC = () => {
  const [text, setText] = React.useState('')
  const [index, setIndex] = React.useState(index2)

  React.useEffect(() => {
    setTimeout(() => {
      let temp = srcs[0]
      for (let i = 1; i < index; i++) {
        temp += srcs[i]
      }
      if (index < srcs.length) {
        setIndex(index + 1)
        // index += 1
      } else {
        setIndex(1)
        // index = 0
      }
      setText(temp)
    }, 200)
    console.log(text)
    return () => {
      // clearTimeout(timer1)
    }
  }, [text])

  return (
    <Typography className="finish-text">
      {text}
    </Typography>)
}
