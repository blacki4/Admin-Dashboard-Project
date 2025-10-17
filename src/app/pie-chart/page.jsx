"use client";

import { ResponsivePie } from "@nivo/pie";
import { useState } from "react";
import { Eye, EyeOff, Download } from "lucide-react";

export default function PieChart() {
  const [activeId, setActiveId] = useState(null);
  const [showValues, setShowValues] = useState(true);

  const pieData = [
    { id: "Python", label: "Python", value: 433, color: "hsl(290, 70%, 50%)" },
    {
      id: "JavaScript",
      label: "JavaScript",
      value: 386,
      color: "hsl(50, 70%, 50%)",
    },
    { id: "Go", label: "Go", value: 586, color: "hsl(65, 70%, 50%)" },
    { id: "Java", label: "Java", value: 321, color: "hsl(0, 70%, 50%)" },
    {
      id: "TypeScript",
      label: "TypeScript",
      value: 278,
      color: "hsl(210, 70%, 50%)",
    },
  ];

  const total = pieData.reduce((sum, item) => sum + item.value, 0);

  const handleMouseEnter = (datum) => {
    setActiveId(datum.id);
  };

  const handleMouseLeave = () => {
    setActiveId(null);
  };

  const exportData = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Language,Value,Percentage\n" +
      pieData
        .map(
          (item) =>
            `${item.label},${item.value},${((item.value / total) * 100).toFixed(
              1
            )}%`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "programming_languages_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen py-10">
      <div className="w-[95%] max-w-6xl bg-white rounded-3xl shadow-2xl p-6 animate-scale-in">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-6">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-indigo-800 mb-2">
              Programming Language Popularity
            </h1>
            <p className="text-gray-600 text-lg">
              Distribution of developer preferences across different programming
              languages
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setShowValues(!showValues)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {showValues ? <EyeOff size={18} /> : <Eye size={18} />}
              {showValues ? "Hide Values" : "Show Values"}
            </button>
            <button
              onClick={exportData}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Download size={18} />
              Export Data
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Chart Container */}
          <div className="lg:col-span-2 h-[500px] bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-4 border border-gray-200">
            <ResponsivePie
              data={pieData}
              margin={{ top: 40, right: 40, bottom: 40, left: 80 }}
              innerRadius={0.5}
              padAngle={1}
              cornerRadius={4}
              activeOuterRadiusOffset={12}
              activeInnerRadiusOffset={12}
              colors={{ datum: "data.color" }}
              borderWidth={2}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              enableArcLinkLabels={true}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#4B5563"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              enableArcLabels={showValues}
              arcLabelsSkipAngle={20}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
              arcLinkLabelsStraightLength={12}
              arcLinkLabelsDiagonalLength={12}
              motionConfig="gentle"
              transitionMode="pushIn"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // إزالة قسم defs و fill تماماً
              theme={{
                background: "transparent",
                textColor: "#1E1B4B",
                fontSize: 13,
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
            />
          </div>

          {/* Statistics Panel */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl text-white">
              <h3 className="font-semibold text-lg mb-2">Total Developers</h3>
              <p className="text-3xl font-bold">{total.toLocaleString()}</p>
              <p className="text-indigo-100 text-sm mt-2">
                Across all languages
              </p>
            </div>

            {pieData.map((item) => {
              const percentage = ((item.value / total) * 100).toFixed(1);
              const isActive = activeId === item.id;

              return (
                <div
                  key={item.id}
                  className={`bg-white p-4 rounded-xl border-2 transition-all duration-300 ${
                    isActive
                      ? "border-indigo-500 shadow-lg scale-105"
                      : "border-gray-200 shadow-sm hover:shadow-md"
                  }`}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-semibold text-gray-800">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-bold text-indigo-700">
                      {item.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">{percentage}%</span>
                    <span className="text-sm text-gray-500">
                      {Math.round((item.value / total) * 1000) / 10}K devs
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Insights */}
            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 Insight</h4>
              <p className="text-yellow-700 text-sm">
                Go language shows strong growth with{" "}
                {((pieData[2].value / total) * 100).toFixed(1)}% adoption,
                indicating rising popularity in system programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
