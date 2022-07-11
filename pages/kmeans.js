import { useRouter } from "next/router";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { Loader } from "../components";
import useKmeans from "../hooks/useKmeans";

const CustomizedAxisTick = (props) => {
  const { x, y, stroke, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default function KMeans() {
  const router = useRouter();
  const [loading, data, error] = useKmeans();
  let clustersData = [];
  let clustersName = [];

  data?.forEach((element) => {
    clustersName.push(element.cluster);
    clustersData.push(element.data);
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <ScatterChart
      width={400}
      height={400}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid />
      <XAxis
        type="number"
        dataKey="borrow_days"
        name="dias de prestamos"
        unit="days"
        tick={<CustomizedAxisTick />}
      />
      <YAxis
        type="number"
        dataKey="borrow_numbers"
        name="numero de prestamos"
        unit="veces"
      />
      <ZAxis
        type="number"
        dataKey="score"
        range={[60, 400]}
        name="score"
        unit=""
      />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend />

      <Scatter
        name={"Cluster" + clustersName[0]}
        data={clustersData[0]}
        fill="#8884d8"
        shape="star"
      />
      <Scatter
        name={"Cluster" + clustersName[1]}
        data={clustersData[1]}
        fill="#82ca9d"
        shape="triangle"
      />
      <Scatter
        name={"Cluster" + clustersName[2]}
        data={clustersData[2]}
        fill="#82347d"
        shape="circle"
        onClick={(props) => {
          const title = props.payload.trans_tittle_code_id;
          console.log(title);
          router.push(`/copy/${title}`);
        }}
        style={{
          cursor: "pointer",
        }}
      />
    </ScatterChart>
  );
}
