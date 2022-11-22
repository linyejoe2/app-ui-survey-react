import { FC, VFC } from "react";
import { FbSearchBar, FbPostBar, FbShortBar, FbNavigationBar, FbContent, FbFirstRow, FbSecondRow, FbThirdRow, FbFourthRow } from "./Facebook/Facebook";
import { YTContent, YTContentNavigationBar, YTFirstRow, YTFourthRow, YTNavigationBar, YTSearchBar, YTSecondRow, YTShortBar, YTThirdRow } from "./YouTube/YouTube";
import { IGContent, IGFirstRow, IGNavigationBar, IGSecondRow, IGShortBar, IGThirdRow, IGTitleBar } from "./Instagram/Instagram";
import { IPhoneHeight, IpositionData, ISurveyData, ISurveyProps, TBar, TPosition, TPosition2, TSocialMedia } from "../../interface";
import { jsx } from "@emotion/react";

export const BarSelector = (positionData: IpositionData):
  [JSX.Element, number] => {
  switch (positionData.name) {
    case "titleBar":
      switch (positionData.style) {
        case "Facebook":
          return [<FbSearchBar key="FbSearchBar" />, 40]
        case "Instagram":
          return [<IGTitleBar />, 40]
        case "YouTube":
          return [<YTSearchBar />, 40]
        case "Dcard":
          return [<FbSearchBar />, 40]
      }
      break
    case "functionBar":
      switch (positionData.style) {
        case "Facebook":
          return [<FbPostBar key="FbPostBar" />, 40]
        // case "Instagram":
        //   return <IG/>
        case "YouTube":
          return [<YTContentNavigationBar />, 40]
        case "Dcard":
          return [<FbPostBar />, 40]
      }
      break
    case "shortBar":
      switch (positionData.style) {
        case "Facebook":
          return [<FbShortBar key="FbShortBar" />, 330]
        case "Instagram":
          return [<IGShortBar />, 330]
        case "YouTube":
          return [<YTShortBar />, 330]
        case "Dcard":
          return [<FbShortBar />, 330]
      }
      break
    case "content":
      switch (positionData.style) {
        case "Facebook":
          return [<FbContent key="FbContent" />, 0]
        case "Instagram":
          return [<IGContent />, 0]
        case "YouTube":
          return [<YTContent />, 0]
        case "Dcard":
          return [<FbContent />, 0]
      }
      break
    case "navigationBar":
      switch (positionData.style) {
        case "Facebook":
          return [<FbNavigationBar key="FbNavigationBar" />, 40]
        case "Instagram":
          return [<IGNavigationBar />, 40]
        case "YouTube":
          return [<YTNavigationBar />, 40]
        case "Dcard":
          return [<FbNavigationBar />, 40]
      }
      break
  }
  return ([<></>, 0])
}