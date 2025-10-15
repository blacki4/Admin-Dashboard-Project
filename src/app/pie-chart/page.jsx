"use client";
import { ResponsivePie } from "@nivo/pie";

export default function PieChart() {
  const pieData = [
    { id: "Stylus", label: "Stylus", value: 304, color: "hsl(167, 70%, 50%)" },
    { id: "Ruby", label: "Ruby", value: 458, color: "hsl(240, 70%, 50%)" },
    { id: "Elixir", label: "Elixir", value: 161, color: "hsl(294, 70%, 50%)" },
    { id: "Python", label: "Python", value: 433, color: "hsl(290, 70%, 50%)" },
    { id: "Go", label: "Go", value: 586, color: "hsl(65, 70%, 50%)" },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-indigo-50">
      <div className="w-[85%] md:w-[70%] h-[90%] bg-white rounded-2xl shadow-lg p-6 flex flex-col">
        <h1 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
          Programming Language Usage
        </h1>
        <div className="flex-1">
          <ResponsivePie
            data={pieData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.6}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateY: 56,
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
          />
        </div>
      </div>
    </div>
  );
}
