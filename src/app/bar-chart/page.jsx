"use client";

import { ResponsiveBar } from "@nivo/bar";
import { useState, useMemo } from "react";
import { Filter, Download, TrendingUp } from "lucide-react";

export default function BarChart() {
  const [selectedCountries, setSelectedCountries] = useState([
    "Spain",
    "France",
    "Germany",
  ]);
  const [animation, setAnimation] = useState(true);

  const barData = [
    { year: 2021, Spain: 900, France: 1400, Germany: 1700 },
    { year: 2022, Spain: 1000, France: 1500, Germany: 1800 },
    { year: 2023, Spain: 1150, France: 1700, Germany: 1970 },
    { year: 2024, Spain: 1300, France: 1800, Germany: 2050 },
    { year: 2025, Spain: 1500, France: 1950, Germany: 2130 },
  ];

  const filteredData = useMemo(() => {
    return barData.map((item) => {
      const filteredItem = { year: item.year };
      selectedCountries.forEach((country) => {
        filteredItem[country] = item[country];
      });
      return filteredItem;
    });
  }, [selectedCountries]);

  const countryColors = {
    Spain: "#4338CA",
    France: "#6366F1",
    Germany: "#A5B4FC",
  };

  const toggleCountry = (country) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    );
  };

  const exportChart = () => {
    // Simulate export functionality
    alert("Chart data exported successfully! 📊");
  };

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen py-10">
      <div className="w-[95%] max-w-7xl bg-white rounded-3xl shadow-2xl p-6 animate-scale-in">
        {/* Header with Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-indigo-600" size={24} />
              </div>
              <h1 className="text-4xl font-bold text-indigo-800">
                Sales Growth by Country
              </h1>
            </div>
            <p className="text-gray-600 text-lg">2021–2025 Revenue Analysis</p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {/* Country Filters */}
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-2">
              {Object.keys(countryColors).map((country) => (
                <button
                  key={country}
                  onClick={() => toggleCountry(country)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCountries.includes(country)
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>

            {/* Control Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setAnimation(!animation)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 border rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Filter size={18} />
                {animation ? "Pause" : "Animate"}
              </button>
              <button
                onClick={exportChart}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Download size={18} />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="h-[600px] bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-4 border border-gray-200">
          <ResponsiveBar
            data={filteredData}
            keys={selectedCountries}
            indexBy="year"
            margin={{ top: 50, right: 130, bottom: 80, left: 80 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={({ id }) => countryColors[id]}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 10,
              tickRotation: 0,
              legend: "Year",
              legendPosition: "middle",
              legendOffset: 50,
              truncateTickAt: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 10,
              tickRotation: 0,
              legend: "Revenue (in thousands EUR)",
              legendPosition: "middle",
              legendOffset: -60,
              truncateTickAt: 0,
              format: (value) => `${value}K`,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 24,
                itemsSpacing: 4,
                symbolSize: 16,
                symbolShape: "circle",
                itemDirection: "left-to-right",
                itemTextColor: "#4338CA",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#312E81",
                      itemBackground: "#EEF2FF",
                    },
                  },
                ],
              },
            ]}
            theme={{
              background: "transparent",
              textColor: "#1E1B4B",
              fontSize: 13,
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
                    fontSize: 12,
                  },
                },
              },
              grid: {
                line: {
                  stroke: "#E0E7FF",
                  strokeWidth: 1,
                },
              },
              legends: {
                text: {
                  fontSize: 12,
                  fontWeight: 500,
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
            role="application"
            ariaLabel="Sales growth bar chart"
            barAriaLabel={(e) =>
              e.id + ": " + e.formattedValue + " in year: " + e.indexValue
            }
          />
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {selectedCountries.map((country) => {
            const countryData = barData.map((item) => item[country]);
            const growth = (
              ((countryData[countryData.length - 1] - countryData[0]) /
                countryData[0]) *
              100
            ).toFixed(1);

            return (
              <div
                key={country}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">{country}</h3>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: countryColors[country] }}
                  />
                </div>
                <p className="text-2xl font-bold text-indigo-800 mb-1">
                  {countryData[countryData.length - 1]}K
                </p>
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp size={14} />
                  {growth}% growth since 2021
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
