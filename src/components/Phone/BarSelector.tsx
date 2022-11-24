import { FbSearchBar, FbPostBar, FbShortBar, FbNavigationBar, FbContent } from './Facebook/Facebook'
import { YTContent, YTContentNavigationBar, YTNavigationBar, YTSearchBar, YTShortBar } from './YouTube/YouTube'
import { IGContent, IGNavigationBar, IGShortBar, IGTitleBar } from './Instagram/Instagram'
import { IpositionData } from '../../interface'
import { DcContent, DcFunctionBar, DcNavigationBar, DcTitleBar } from './Dcard/Dcard'

export const BarSelector = (positionData: IpositionData):
  [JSX.Element, number, string] => {
  switch (positionData.name) {
    case 'titleBar':
      switch (positionData.style) {
        case 'Facebook':
          return [<FbSearchBar key="FbSearchBar" />, 64, '']
        case 'Instagram':
          return [<IGTitleBar key="IGTitleBar" />, 30, '']
        case 'YouTube':
          return [<YTSearchBar key="YTSearchBar" />, 60, '']
        case 'Dcard':
          return [<DcTitleBar key="DcTitleBar" />, 40, '#2c68a1']
      }
      break
    case 'functionBar':
      switch (positionData.style) {
        case 'Facebook':
          return [<FbPostBar key="FbPostBar" />, 40, '']
        // case "Instagram":
        //   return <IG/>
        case 'YouTube':
          return [<YTContentNavigationBar key="YTContentNavigationBar" />, 40, '']
        case 'Dcard':
          return [<DcFunctionBar key="DcFunctionBar" />, 40, '']
      }
      break
    case 'shortBar':
      switch (positionData.style) {
        case 'Facebook':
          return [<FbShortBar key="FbShortBar" />, 330, '']
        case 'Instagram':
          return [<IGShortBar key="IGShortBar" />, 330, '']
        case 'YouTube':
          return [<YTShortBar key="YTShortBar" />, 330, '']
        // case "Dcard":
        //   return [<FbShortBar key="FbShortBar" />, 330, ""]
      }
      break
    case 'content':
      switch (positionData.style) {
        case 'Facebook':
          return [<FbContent key="FbContent" />, 0, '']
        case 'Instagram':
          return [<IGContent key="IGContent" />, 0, '']
        case 'YouTube':
          return [<YTContent key="YTContent" />, 0, '']
        case 'Dcard':
          return [<DcContent key="DcContent" />, 0, '']
      }
      break
    case 'navigationBar':
      switch (positionData.style) {
        case 'Facebook':
          return [<FbNavigationBar key="FbNavigationBar" />, 56, '']
        case 'Instagram':
          return [<IGNavigationBar key="IGNavigationBar" />, 56, '']
        case 'YouTube':
          return [<YTNavigationBar key="YTNavigationBar" />, 65, '']
        case 'Dcard':
          return [<DcNavigationBar key="DcNavigationBar" />, 56, '']
      }
      break
  }
  return ([<></>, 0, ''])
}
