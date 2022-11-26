import { FC } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
interface props {
  pieData: {
    title: string;
    value: number;
    color: string;
  }[]
}

const CustomPieChart: FC<props> = ({
  pieData
}) => {
  return (<PieChart animate
    data={pieData}
    style={{ width: '300px' }}
    lineWidth={15}
    label={({ x, y, dx, dy, dataEntry }) => {
      if (dataEntry.value === 0) return
      return (
        <text
          x={x}
          y={y}
          dx={dx}
          dy={dy}
          dominantBaseline="central"
          textAnchor="middle"
          style={{
            fontSize: '5px',
            fontFamily: 'sans-serif',
            fill: dataEntry.color
          }}
        >
          {dataEntry.title + ': ' + Math.round(dataEntry.percentage) + '%'}
        </text>
      )
    }}
  // label={({ dataEntry }) => { if (dataEntry.value !== 0) return dataEntry.value }}
  // labelStyle={(id) => {
  //   const ele = PieData[id]
  //   return ({ fontSize: "10px", fill: ele.color })
  // }}
  // labelStyle={{
  //   fontSize: '10px',
  //   fontFamily: 'sans-serif',
  //   fill: '#E38627'
  // }}
  // paddingAngle={10}
  // viewBoxSize={[300, 300]}
  >
    <defs>
      {/* linear-gradient(225.54deg, #751BCF 22.06%, #B62586 48.32%, #EFAC59 69.89%); */}
      <linearGradient id="gradient1" gradientTransform="rotate(30)">
        <stop offset="0%" stopColor="#751BCF" />
        <stop offset="45%" stopColor="#B62586" />
        <stop offset="100%" stopColor="#EFAC59" />
      </linearGradient>
    </defs>
  </PieChart>)
}

export default CustomPieChart
