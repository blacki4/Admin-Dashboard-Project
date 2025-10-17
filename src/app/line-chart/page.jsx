"use client";

import { ResponsiveLine } from "@nivo/line";
import { useState, useMemo } from "react";
import { Play, Pause, ZoomIn, ZoomOut } from "lucide-react";

export default function LineChart() {
  const [animation, setAnimation] = useState(true);
  const [selectedCountries, setSelectedCountries] = useState([
    "japan",
    "france",
    "us",
    "germany",
    "norway",
  ]);

  const lineData = [
    {
      id: "japan",
      color: "#4338CA",
      data: [
        { x: "plane", y: 256 },
        { x: "helicopter", y: 251 },
        { x: "boat", y: 232 },
        { x: "train", y: 164 },
        { x: "subway", y: 236 },
        { x: "bus", y: 222 },
        { x: "car", y: 274 },
        { x: "moto", y: 7 },
        { x: "bicycle", y: 127 },
        { x: "horse", y: 22 },
        { x: "skateboard", y: 246 },
        { x: "others", y: 286 },
      ],
    },
    {
      id: "france",
      color: "#6366F1",
      data: [
        { x: "plane", y: 71 },
        { x: "helicopter", y: 104 },
        { x: "boat", y: 251 },
        { x: "train", y: 284 },
        { x: "subway", y: 111 },
        { x: "bus", y: 55 },
        { x: "car", y: 162 },
        { x: "moto", y: 52 },
        { x: "bicycle", y: 20 },
        { x: "horse", y: 160 },
        { x: "skateboard", y: 287 },
        { x: "others", y: 242 },
      ],
    },
    {
      id: "us",
      color: "#10B981",
      data: [
        { x: "plane", y: 208 },
        { x: "helicopter", y: 241 },
        { x: "boat", y: 138 },
        { x: "train", y: 22 },
        { x: "subway", y: 75 },
        { x: "bus", y: 153 },
        { x: "car", y: 180 },
        { x: "moto", y: 76 },
        { x: "bicycle", y: 239 },
        { x: "horse", y: 187 },
        { x: "skateboard", y: 74 },
        { x: "others", y: 133 },
      ],
    },
    {
      id: "germany",
      color: "#F59E0B",
      data: [
        { x: "plane", y: 60 },
        { x: "helicopter", y: 37 },
        { x: "boat", y: 177 },
        { x: "train", y: 44 },
        { x: "subway", y: 2 },
        { x: "bus", y: 3 },
        { x: "car", y: 207 },
        { x: "moto", y: 146 },
        { x: "bicycle", y: 173 },
        { x: "horse", y: 26 },
        { x: "skateboard", y: 277 },
        { x: "others", y: 164 },
      ],
    },
    {
      id: "norway",
      color: "#EF4444",
      data: [
        { x: "plane", y: 274 },
        { x: "helicopter", y: 168 },
        { x: "boat", y: 240 },
        { x: "train", y: 231 },
        { x: "subway", y: 124 },
        { x: "bus", y: 203 },
        { x: "car", y: 227 },
        { x: "moto", y: 6 },
        { x: "bicycle", y: 209 },
        { x: "horse", y: 102 },
        { x: "skateboard", y: 124 },
        { x: "others", y: 228 },
      ],
    },
  ];

  const filteredData = useMemo(
    () => lineData.filter((country) => selectedCountries.includes(country.id)),
    [selectedCountries]
  );

  const toggleCountry = (countryId) => {
    setSelectedCountries((prev) =>
      prev.includes(countryId)
        ? prev.filter((id) => id !== countryId)
        : [...prev, countryId]
    );
  };

  const getCountryName = (id) => {
    const names = {
      japan: "Japan",
      france: "France",
      us: "USA",
      germany: "Germany",
      norway: "Norway",
    };
    return names[id] || id;
  };

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen py-10">
      <div className="w-[95%] max-w-7xl bg-white rounded-3xl shadow-2xl p-6 animate-scale-in">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-6">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-indigo-800 mb-2">
              Transportation Usage by Country
            </h1>
            <p className="text-gray-600 text-lg">
              Comparative analysis of transportation methods across different
              countries
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {/* Country Filters */}
            <div className="flex flex-wrap gap-2">
              {lineData.map((country) => (
                <button
                  key={country.id}
                  onClick={() => toggleCountry(country.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCountries.includes(country.id)
                      ? "text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                  }`}
                  style={{
                    backgroundColor: selectedCountries.includes(country.id)
                      ? country.color
                      : undefined,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: country.color }}
                  />
                  {getCountryName(country.id)}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex gap-2">
              <button
                onClick={() => setAnimation(!animation)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {animation ? <Pause size={18} /> : <Play size={18} />}
                {animation ? "Pause" : "Play"}
              </button>
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="h-[700px] bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-6 border border-gray-200">
          <ResponsiveLine
            data={filteredData}
            margin={{ top: 50, right: 110, bottom: 100, left: 80 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: 0,
              max: 300,
              stacked: false,
            }}
            curve="monotoneX"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 10,
              tickRotation: -45,
              legend: "Transportation Method",
              legendOffset: 70,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 10,
              tickRotation: 0,
              legend: "Usage Count",
              legendOffset: -60,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={3}
            pointBorderColor={{ from: "serieColor" }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            enableSlices="x"
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            theme={{
              background: "transparent",
              textColor: "#1E1B4B",
              fontSize: 12,
              axis: {
                domain: {
                  line: {
                    stroke: "#C7D2FE",
                    strokeWidth: 1,
                  },
                },
                legend: {
                  text: {
                    fontSize: 14,
                    fontWeight: 600,
                    fill: "#3730A3",
                  },
                },
                ticks: {
                  line: {
                    stroke: "#C7D2FE",
                    strokeWidth: 1,
                  },
                  text: {
                    fill: "#4F46E5",
                  },
                },
              },
              grid: {
                line: {
                  stroke: "#E0E7FF",
                  strokeWidth: 1,
                },
              },
              crosshair: {
                line: {
                  stroke: "#3730A3",
                  strokeWidth: 1,
                  strokeOpacity: 0.35,
                },
              },
              tooltip: {
                container: {
                  background: "#fff",
                  color: "#111827",
                  fontSize: 13,
                  borderRadius: "12px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  border: "1px solid #E5E7EB",
                },
              },
            }}
            animate={animation}
            motionConfig="gentle"
            enableArea={true}
            areaOpacity={0.15}
            defs={[
              {
                id: "gradient",
                type: "linearGradient",
                colors: [
                  { offset: 0, color: "inherit", opacity: 0.3 },
                  { offset: 100, color: "inherit", opacity: 0 },
                ],
              },
            ]}
            fill={[{ match: "*", id: "gradient" }]}
          />
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              📊 Key Insights
            </h3>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>• Car usage is consistently high across all countries</li>
              <li>• Japan shows highest usage of traditional transportation</li>
              <li>• Norway leads in eco-friendly transport adoption</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">🚀 Trends</h3>
            <ul className="text-green-700 space-y-1 text-sm">
              <li>• Growing preference for sustainable transport</li>
              <li>• Public transport usage varies by region</li>
              <li>• Cultural differences impact transportation choices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
