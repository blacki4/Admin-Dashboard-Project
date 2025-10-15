"use client";

import { ResponsiveBar } from "@nivo/bar";

export default function BarChart() {
  const barData = [
    { year: 2021, Spain: 900, France: 1400, Germany: 1700 },
    { year: 2022, Spain: 1000, France: 1500, Germany: 1800 },
    { year: 2023, Spain: 1150, France: 1700, Germany: 1970 },
    { year: 2024, Spain: 1300, France: 1800, Germany: 2050 },
    { year: 2025, Spain: 1500, France: 1950, Germany: 2130 },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-indigo-50">
      <div className="w-[90%] h-[90%] bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
          Sales Growth by Country (2021–2025)
        </h1>
        <div className="h-[90%]">
          <ResponsiveBar
            data={barData}
            keys={["Spain", "France", "Germany"]}
            indexBy="year"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            colors={["#4338CA", "#6366F1", "#A5B4FC"]}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Year",
              legendPosition: "middle",
              legendOffset: 40,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Minimum Wage in EUR",
              legendPosition: "middle",
              legendOffset: -50,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 10,
                itemWidth: 100,
                itemHeight: 20,
                itemTextColor: "#4338CA",
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: { itemTextColor: "#312E81" },
                  },
                ],
              },
            ]}
            theme={{
              textColor: "#1E1B4B",
              fontSize: 13,
              axis: {
                domain: { line: { stroke: "#C7D2FE" } },
                ticks: {
                  line: { stroke: "#C7D2FE" },
                  text: { fill: "#312E81" },
                },
              },
              grid: { line: { stroke: "#E0E7FF" } },
              legends: { text: { fill: "#4338CA" } },
              tooltip: {
                container: {
                  background: "#fff",
                  color: "#111827",
                  fontSize: 13,
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                },
              },
            }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      </div>
    </div>
  );
}
