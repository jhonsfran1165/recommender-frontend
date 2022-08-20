import { Box, Container, Stack, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Select from "react-select";
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
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import { Hero, Loader } from "../components";
import { ALL_PROGRAMS } from "../constants";
import useKmeans from "../hooks/useKmeans";

const EmailPasswordAuthNoSSR = dynamic(
  new Promise((res) => res(EmailPassword.EmailPasswordAuth)),
  { ssr: false }
);

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

const shapes = [
  "triangle",
  "star",
  "circle",
  "cross",
  "diamond",
  "square",
  "wye",
];

const colors = [
  "#FC8181",
  "#2D3748",
  "#ED8936",
  "#2F855A",
  "#3182CE",
  "#553C9A",
  "#744210",
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const title_name = "";
    return (
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="#718096"
        w="100%"
        p={4}
        color="white"
      >
        {payload.map((element, index) => {
          title_name = element.payload.title_name;

          return (
            <Text key={index} fontSize="xs">
              <b>{`${element.name} : `}</b>
              {`${element.value} ${element.unit}`}
            </Text>
          );
        })}

        <Text fontSize="md">
          <b>Title Name : </b>
          {`${title_name}`}
        </Text>
      </Box>
    );
  }

  return null;
};

const KMeans = ({ dataProg }) => {
  const router = useRouter();

  const [prog, sede, jor] = dataProg?.value?.split("*") || [, ,]; // default program
  const [loading, data, error] = useKmeans({ prog, jor, sede: parseInt(sede) });

  if (loading) {
    return <Loader />;
  }

  return (
    <ScatterChart
      width={500}
      height={500}
      margin={{
        top: 40,
        right: 40,
        bottom: 40,
        left: 40,
      }}
      id={"clusters"}
    >
      <CartesianGrid />
      <XAxis
        type="number"
        dataKey="borrow_days"
        name="dias de préstamo"
        unit="days"
        tick={<CustomizedAxisTick />}
      />
      <YAxis
        type="number"
        dataKey="borrow_numbers"
        name="numero de préstamo"
        unit="veces"
      />
      <ZAxis
        type="number"
        dataKey="score"
        range={[100, 600]}
        name="score"
        unit="points"
      />
      <Tooltip
        content={CustomTooltip}
        cursor={{ stroke: "red", strokeWidth: 2 }}
      />
      <Legend verticalAlign="top" height={36} />
      {data?.map((element, index) => {
        return (
          <Scatter
            key={index}
            id={index}
            name={"Cluster " + element.cluster}
            data={element.data}
            fill={colors[index]}
            shape={shapes[index]}
            onClick={(props) => {
              const title = props.trans_tittle_code_id;
              router.push(`/titles/${title}`);
            }}
            style={{
              cursor: "pointer",
            }}
          />
        );
      })}
    </ScatterChart>
  );
};

export default function KMeansPage() {
  const [prog, setProg] = useState({});

  return (
    <EmailPasswordAuthNoSSR>
      {" "}
      <Container>
        <Stack as={Box}>
          <Hero />
          <Text color={"gray.500"}>
            *** Esta gráfica representa los títulos más para cada cluster en tu
            programa académico, ten en cuenta que la cantidad de días es una
            sumatoria total de los días en que cada copia del título ha sido
            prestada. ***
          </Text>

          <Select
            options={ALL_PROGRAMS}
            onChange={(value) => {
              setProg(value);
            }}
          />

          <KMeans dataProg={prog} />
        </Stack>
      </Container>
    </EmailPasswordAuthNoSSR>
  );
}
