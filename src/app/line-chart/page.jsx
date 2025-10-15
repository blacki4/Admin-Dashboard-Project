"use client";

import { ResponsiveLine } from "@nivo/line";

export default function LineChart() {
  const lineData = [
    {
      id: "japan",
      data: [
        {
          x: "plane",
          y: 256,
        },
        {
          x: "helicopter",
          y: 251,
        },
        {
          x: "boat",
          y: 232,
        },
        {
          x: "train",
          y: 164,
        },
        {
          x: "subway",
          y: 236,
        },
        {
          x: "bus",
          y: 222,
        },
        {
          x: "car",
          y: 274,
        },
        {
          x: "moto",
          y: 7,
        },
        {
          x: "bicycle",
          y: 127,
        },
        {
          x: "horse",
          y: 22,
        },
        {
          x: "skateboard",
          y: 246,
        },
        {
          x: "others",
          y: 286,
        },
      ],
    },
    {
      id: "france",
      data: [
        {
          x: "plane",
          y: 71,
        },
        {
          x: "helicopter",
          y: 104,
        },
        {
          x: "boat",
          y: 251,
        },
        {
          x: "train",
          y: 284,
        },
        {
          x: "subway",
          y: 111,
        },
        {
          x: "bus",
          y: 55,
        },
        {
          x: "car",
          y: 162,
        },
        {
          x: "moto",
          y: 52,
        },
        {
          x: "bicycle",
          y: 20,
        },
        {
          x: "horse",
          y: 160,
        },
        {
          x: "skateboard",
          y: 287,
        },
        {
          x: "others",
          y: 242,
        },
      ],
    },
    {
      id: "us",
      data: [
        {
          x: "plane",
          y: 208,
        },
        {
          x: "helicopter",
          y: 241,
        },
        {
          x: "boat",
          y: 138,
        },
        {
          x: "train",
          y: 22,
        },
        {
          x: "subway",
          y: 75,
        },
        {
          x: "bus",
          y: 153,
        },
        {
          x: "car",
          y: 180,
        },
        {
          x: "moto",
          y: 76,
        },
        {
          x: "bicycle",
          y: 239,
        },
        {
          x: "horse",
          y: 187,
        },
        {
          x: "skateboard",
          y: 74,
        },
        {
          x: "others",
          y: 133,
        },
      ],
    },
    {
      id: "germany",
      data: [
        {
          x: "plane",
          y: 60,
        },
        {
          x: "helicopter",
          y: 37,
        },
        {
          x: "boat",
          y: 177,
        },
        {
          x: "train",
          y: 44,
        },
        {
          x: "subway",
          y: 2,
        },
        {
          x: "bus",
          y: 3,
        },
        {
          x: "car",
          y: 207,
        },
        {
          x: "moto",
          y: 146,
        },
        {
          x: "bicycle",
          y: 173,
        },
        {
          x: "horse",
          y: 26,
        },
        {
          x: "skateboard",
          y: 277,
        },
        {
          x: "others",
          y: 164,
        },
      ],
    },
    {
      id: "norway",
      data: [
        {
          x: "plane",
          y: 274,
        },
        {
          x: "helicopter",
          y: 168,
        },
        {
          x: "boat",
          y: 240,
        },
        {
          x: "train",
          y: 231,
        },
        {
          x: "subway",
          y: 124,
        },
        {
          x: "bus",
          y: 203,
        },
        {
          x: "car",
          y: 227,
        },
        {
          x: "moto",
          y: 6,
        },
        {
          x: "bicycle",
          y: 209,
        },
        {
          x: "horse",
          y: 102,
        },
        {
          x: "skateboard",
          y: 124,
        },
        {
          x: "others",
          y: 228,
        },
      ],
    },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-indigo-50">
      <div className="w-[85%] md:w-[70%] h-[95%] bg-white rounded-2xl shadow-lg p-6 flex flex-col">
        <h1 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
          Transportation Count by Country
        </h1>
        <div className="flex-1">
          <ResponsiveLine
            data={lineData}
            margin={{ top: 10, right: 110, bottom: 70, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{ type: "linear", min: "auto", max: "auto", stacked: true }}
            curve="catmullRom"
            axisBottom={{
              legend: "Transportation",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              legend: "Count",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            pointSize={8}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            enableSlices="x"
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 70,
                itemsSpacing: 15,
                itemDirection: "left-to-right",
                itemWidth: 100,
                itemHeight: 20,
                itemOpacity: 0.85,
                symbolSize: 12,
                symbolShape: "circle",
                itemTextColor: "#4338CA",
                effects: [
                  {
                    on: "hover",
                    style: { itemTextColor: "#312E81", itemOpacity: 1 },
                  },
                ],
              },
            ]}
            theme={{
              textColor: "#1E1B4B",
              fontSize: 12,
              tooltip: {
                container: {
                  background: "#fff",
                  color: "#111827",
                  fontSize: 12,
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
