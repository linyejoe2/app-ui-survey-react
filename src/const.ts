import { TBar, IPhoneBar, IpositionData } from './interface'

export const FbUIStyle: Map<TBar, IPhoneBar> = new Map([
  ['titleBar', { Position: 1, Style: 'Facebook' }],
  ['functionBar', { Position: 2, Style: 'Facebook' }],
  ['shortBar', { Position: 3, Style: 'Facebook' }],
  ['content', { Position: 4, Style: 'Facebook' }],
  ['navigationBar', { Position: 5, Style: 'Facebook' }]]
)

export const IgUIStyle: Map<TBar, IPhoneBar> = new Map([
  ['titleBar', { Position: 1, Style: 'Instagram' }],
  ['functionBar', { Position: 0, Style: 'Instagram' }],
  ['shortBar', { Position: 2, Style: 'Instagram' }],
  ['content', { Position: 3, Style: 'Instagram' }],
  ['navigationBar', { Position: 4, Style: 'Instagram' }]]
)

export const YTUIStyle: Map<TBar, IPhoneBar> = new Map([
  ['titleBar', { Position: 1, Style: 'YouTube' }],
  ['functionBar', { Position: 2, Style: 'YouTube' }],
  ['shortBar', { Position: 4, Style: 'YouTube' }],
  ['content', { Position: 3, Style: 'YouTube' }],
  ['navigationBar', { Position: 5, Style: 'YouTube' }]]
)

export const FbPositionDatas: IpositionData[] = [
  { uid: '1', name: 'titleBar', position: '1', enable: true, style: 'Facebook', fixed: true },
  { uid: '2', name: 'functionBar', position: '2', enable: true, style: 'Facebook', fixed: false },
  { uid: '3', name: 'shortBar', position: '3', enable: true, style: 'Facebook', fixed: false },
  { uid: '4', name: 'content', position: '4', enable: true, style: 'Facebook', fixed: false },
  { uid: '5', name: 'navigationBar', position: '5', enable: true, style: 'Facebook', fixed: true }
]

export const IgPositionDatas: IpositionData[] = [
  { uid: '1', name: 'titleBar', position: '1', enable: true, style: 'Instagram', fixed: true },
  { uid: '2', name: 'functionBar', position: '2', enable: false, style: 'Facebook', fixed: false },
  { uid: '3', name: 'shortBar', position: '3', enable: true, style: 'Instagram', fixed: false },
  { uid: '4', name: 'content', position: '4', enable: true, style: 'Instagram', fixed: false },
  { uid: '5', name: 'navigationBar', position: '5', enable: true, style: 'Instagram', fixed: true }
]

export const YTPositionDatas: IpositionData[] = [
  { uid: '1', name: 'titleBar', position: '1', enable: true, style: 'YouTube', fixed: true },
  { uid: '2', name: 'functionBar', position: '2', enable: true, style: 'YouTube', fixed: true },
  { uid: '4', name: 'content', position: '3', enable: true, style: 'YouTube', fixed: false },
  { uid: '3', name: 'shortBar', position: '4', enable: true, style: 'YouTube', fixed: false },
  { uid: '5', name: 'navigationBar', position: '5', enable: true, style: 'YouTube', fixed: true }
]

export const DcPositionDatas: IpositionData[] = [
  { uid: '1', name: 'titleBar', position: '1', enable: true, style: 'Dcard', fixed: true },
  { uid: '2', name: 'functionBar', position: '2', enable: true, style: 'Dcard', fixed: true },
  { uid: '4', name: 'content', position: '3', enable: true, style: 'Dcard', fixed: false },
  { uid: '3', name: 'shortBar', position: '4', enable: false, style: 'Facebook', fixed: false },
  { uid: '5', name: 'navigationBar', position: '5', enable: true, style: 'Dcard', fixed: true }
]
