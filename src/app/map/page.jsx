"use client";

import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./world_countries.jsx";
import { useState, useMemo } from "react";
import { Search, Filter, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

export default function Map() {
  const [selectedRange, setSelectedRange] = useState([0, 1000000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [projectionScale, setProjectionScale] = useState(145);

  // إنشاء كائن لربط رموز الدول بأسمائها
  const countryCodes = useMemo(() => {
    const codes = {};
    geo.features.forEach((feature) => {
      codes[feature.id] = feature.properties.name;
    });
    return codes;
  }, []);

  const mapData = [
    {
      id: "AFG",
      value: 389371,
    },
    {
      id: "AGO",
      value: 131739,
    },
    {
      id: "ALB",
      value: 435584,
    },
    {
      id: "ARE",
      value: 440726,
    },
    {
      id: "ARG",
      value: 175585,
    },
    {
      id: "ARM",
      value: 765257,
    },
    {
      id: "ATA",
      value: 896185,
    },
    {
      id: "ATF",
      value: 962034,
    },
    {
      id: "AUT",
      value: 378607,
    },
    {
      id: "AZE",
      value: 756122,
    },
    {
      id: "BDI",
      value: 894824,
    },
    {
      id: "BEL",
      value: 543156,
    },
    {
      id: "BEN",
      value: 834821,
    },
    {
      id: "BFA",
      value: 3039,
    },
    {
      id: "BGD",
      value: 958052,
    },
    {
      id: "BGR",
      value: 833005,
    },
    {
      id: "BHS",
      value: 7767,
    },
    {
      id: "BIH",
      value: 686307,
    },
    {
      id: "BLR",
      value: 161499,
    },
    {
      id: "BLZ",
      value: 870388,
    },
    {
      id: "BOL",
      value: 24864,
    },
    {
      id: "BRN",
      value: 344943,
    },
    {
      id: "BTN",
      value: 492749,
    },
    {
      id: "BWA",
      value: 11219,
    },
    {
      id: "CAF",
      value: 127526,
    },
    {
      id: "CAN",
      value: 682031,
    },
    {
      id: "CHE",
      value: 136749,
    },
    {
      id: "CHL",
      value: 371961,
    },
    {
      id: "CHN",
      value: 270457,
    },
    {
      id: "CIV",
      value: 789759,
    },
    {
      id: "CMR",
      value: 613568,
    },
    {
      id: "COG",
      value: 541156,
    },
    {
      id: "COL",
      value: 842556,
    },
    {
      id: "CRI",
      value: 527961,
    },
    {
      id: "CUB",
      value: 146914,
    },
    {
      id: "-99",
      value: 662217,
    },
    {
      id: "CYP",
      value: 758063,
    },
    {
      id: "CZE",
      value: 997274,
    },
    {
      id: "DEU",
      value: 187204,
    },
    {
      id: "DJI",
      value: 539109,
    },
    {
      id: "DNK",
      value: 84438,
    },
    {
      id: "DOM",
      value: 822167,
    },
    {
      id: "DZA",
      value: 695559,
    },
    {
      id: "ECU",
      value: 249631,
    },
    {
      id: "EGY",
      value: 672190,
    },
    {
      id: "ERI",
      value: 192358,
    },
    {
      id: "ESP",
      value: 920968,
    },
    {
      id: "EST",
      value: 813609,
    },
    {
      id: "ETH",
      value: 427054,
    },
    {
      id: "FIN",
      value: 527506,
    },
    {
      id: "FJI",
      value: 667910,
    },
    {
      id: "FLK",
      value: 376272,
    },
    {
      id: "FRA",
      value: 686573,
    },
    {
      id: "GAB",
      value: 274900,
    },
    {
      id: "GBR",
      value: 592874,
    },
    {
      id: "GEO",
      value: 226287,
    },
    {
      id: "GHA",
      value: 408765,
    },
    {
      id: "GIN",
      value: 768807,
    },
    {
      id: "GMB",
      value: 196206,
    },
    {
      id: "GNB",
      value: 735285,
    },
    {
      id: "GNQ",
      value: 1049,
    },
    {
      id: "GRC",
      value: 332493,
    },
    {
      id: "GTM",
      value: 653042,
    },
    {
      id: "GUY",
      value: 65478,
    },
    {
      id: "HND",
      value: 151102,
    },
    {
      id: "HRV",
      value: 819123,
    },
    {
      id: "HTI",
      value: 81303,
    },
    {
      id: "HUN",
      value: 893005,
    },
    {
      id: "IDN",
      value: 394641,
    },
    {
      id: "IND",
      value: 98760,
    },
    {
      id: "IRL",
      value: 954684,
    },
    {
      id: "IRN",
      value: 342883,
    },
    {
      id: "IRQ",
      value: 205397,
    },
    {
      id: "ISL",
      value: 219187,
    },
    {
      id: "ISR",
      value: 590530,
    },
    {
      id: "ITA",
      value: 331659,
    },
    {
      id: "JAM",
      value: 219447,
    },
    {
      id: "JOR",
      value: 51097,
    },
    {
      id: "JPN",
      value: 421911,
    },
    {
      id: "KAZ",
      value: 831770,
    },
    {
      id: "KEN",
      value: 824360,
    },
    {
      id: "KGZ",
      value: 70990,
    },
    {
      id: "KHM",
      value: 626279,
    },
    {
      id: "OSA",
      value: 994014,
    },
    {
      id: "KWT",
      value: 371153,
    },
    {
      id: "LAO",
      value: 102518,
    },
    {
      id: "LBN",
      value: 990608,
    },
    {
      id: "LBR",
      value: 963618,
    },
    {
      id: "LBY",
      value: 455673,
    },
    {
      id: "LKA",
      value: 616967,
    },
    {
      id: "LSO",
      value: 68705,
    },
    {
      id: "LTU",
      value: 970419,
    },
    {
      id: "LUX",
      value: 211430,
    },
    {
      id: "LVA",
      value: 544,
    },
    {
      id: "MAR",
      value: 561769,
    },
    {
      id: "MDA",
      value: 456379,
    },
    {
      id: "MDG",
      value: 682287,
    },
    {
      id: "MEX",
      value: 666902,
    },
    {
      id: "MKD",
      value: 225987,
    },
    {
      id: "MLI",
      value: 715603,
    },
    {
      id: "MMR",
      value: 762325,
    },
    {
      id: "MNE",
      value: 115221,
    },
    {
      id: "MNG",
      value: 914709,
    },
    {
      id: "MOZ",
      value: 482224,
    },
    {
      id: "MRT",
      value: 261011,
    },
    {
      id: "MWI",
      value: 628909,
    },
    {
      id: "MYS",
      value: 577691,
    },
    {
      id: "NAM",
      value: 260578,
    },
    {
      id: "NCL",
      value: 176635,
    },
    {
      id: "NER",
      value: 153952,
    },
    {
      id: "NGA",
      value: 84519,
    },
    {
      id: "NIC",
      value: 378263,
    },
    {
      id: "NLD",
      value: 118805,
    },
    {
      id: "NOR",
      value: 963788,
    },
    {
      id: "NPL",
      value: 234916,
    },
    {
      id: "NZL",
      value: 304168,
    },
    {
      id: "OMN",
      value: 419747,
    },
    {
      id: "PAK",
      value: 142767,
    },
    {
      id: "PAN",
      value: 36931,
    },
    {
      id: "PER",
      value: 502345,
    },
    {
      id: "PHL",
      value: 421494,
    },
    {
      id: "PNG",
      value: 836129,
    },
    {
      id: "POL",
      value: 828276,
    },
    {
      id: "PRI",
      value: 641607,
    },
    {
      id: "PRT",
      value: 880202,
    },
    {
      id: "PRY",
      value: 989771,
    },
    {
      id: "QAT",
      value: 231017,
    },
    {
      id: "ROU",
      value: 259099,
    },
    {
      id: "RUS",
      value: 148193,
    },
    {
      id: "RWA",
      value: 922575,
    },
    {
      id: "ESH",
      value: 703336,
    },
    {
      id: "SAU",
      value: 92657,
    },
    {
      id: "SDN",
      value: 763413,
    },
    {
      id: "SDS",
      value: 471615,
    },
    {
      id: "SEN",
      value: 665253,
    },
    {
      id: "SLB",
      value: 600731,
    },
    {
      id: "SLE",
      value: 585335,
    },
    {
      id: "SLV",
      value: 459886,
    },
    {
      id: "ABV",
      value: 516050,
    },
    {
      id: "SOM",
      value: 918870,
    },
    {
      id: "SRB",
      value: 845824,
    },
    {
      id: "SUR",
      value: 979481,
    },
    {
      id: "SVK",
      value: 686099,
    },
    {
      id: "SVN",
      value: 936195,
    },
    {
      id: "SWZ",
      value: 656,
    },
    {
      id: "SYR",
      value: 554522,
    },
    {
      id: "TCD",
      value: 830818,
    },
    {
      id: "TGO",
      value: 143818,
    },
    {
      id: "THA",
      value: 425345,
    },
    {
      id: "TJK",
      value: 8695,
    },
    {
      id: "TKM",
      value: 886281,
    },
    {
      id: "TLS",
      value: 175276,
    },
    {
      id: "TTO",
      value: 393333,
    },
    {
      id: "TUN",
      value: 563181,
    },
    {
      id: "TUR",
      value: 291908,
    },
    {
      id: "TWN",
      value: 326666,
    },
    {
      id: "TZA",
      value: 443820,
    },
    {
      id: "UGA",
      value: 603313,
    },
    {
      id: "UKR",
      value: 877940,
    },
    {
      id: "URY",
      value: 432657,
    },
    {
      id: "USA",
      value: 866166,
    },
    {
      id: "UZB",
      value: 806853,
    },
    {
      id: "VEN",
      value: 691676,
    },
    {
      id: "VNM",
      value: 974025,
    },
    {
      id: "VUT",
      value: 815790,
    },
    {
      id: "PSE",
      value: 840036,
    },
    {
      id: "YEM",
      value: 457288,
    },
    {
      id: "ZAF",
      value: 199363,
    },
    {
      id: "ZMB",
      value: 172403,
    },
    {
      id: "ZWE",
      value: 674993,
    },
    {
      id: "KOR",
      value: 959265,
    },
  ].map((country) => ({
    ...country,
    name: countryCodes[country.id] || country.id,
  }));

  const filteredData = useMemo(() => {
    let filtered = mapData.filter(
      (country) =>
        country.value >= selectedRange[0] && country.value <= selectedRange[1]
    );

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedRange, searchTerm, mapData]);

  const zoomIn = () => setProjectionScale((prev) => Math.min(prev + 20, 300));
  const zoomOut = () => setProjectionScale((prev) => Math.max(prev - 20, 80));
  const resetZoom = () => setProjectionScale(145);

  return (
    <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen py-10">
      <div className="w-[95%] max-w-7xl bg-white rounded-3xl shadow-2xl p-6 animate-scale-in">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-6">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-indigo-800 mb-2">
              Global Programming Language Usage
            </h1>
            <p className="text-gray-600 text-lg">
              Developer distribution and technology adoption worldwide
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-black pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Zoom Controls */}
            <div className="flex gap-2 bg-indigo-600 rounded-lg p-1">
              <button
                onClick={zoomOut}
                className="p-2 hover:bg-indigo-700 rounded-md transition-colors"
                title="Zoom Out"
              >
                <ZoomOut size={18} />
              </button>
              <button
                onClick={resetZoom}
                className="p-2 hover:bg-indigo-700 rounded-md transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw size={18} />
              </button>
              <button
                onClick={zoomIn}
                className="p-2 hover:bg-indigo-700 rounded-md transition-colors"
                title="Zoom In"
              >
                <ZoomIn size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-xl">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Usage Range: {selectedRange[0].toLocaleString()} -{" "}
              {selectedRange[1].toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="1000000"
              step="10000"
              value={selectedRange[1]}
              onChange={(e) => setSelectedRange([0, parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span>250K</span>
              <span>500K</span>
              <span>750K</span>
              <span>1M</span>
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-xl">
            <h3 className="font-semibold text-indigo-800 mb-2">
              🌍 Map Legend
            </h3>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <div className="w-4 h-4 bg-blue-300 rounded"></div>
                <div className="w-4 h-4 bg-blue-400 rounded"></div>
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <div className="w-4 h-4 bg-blue-700 rounded"></div>
              </div>
              <span className="text-gray-600">Low → High Usage</span>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="font-semibold text-green-800 mb-2">📊 Statistics</h3>
            <div className="text-sm text-green-700">
              Showing {filteredData.length} countries
              <br />
              Average:{" "}
              {filteredData.length > 0
                ? Math.round(
                    filteredData.reduce((a, b) => a + b.value, 0) /
                      filteredData.length
                  ).toLocaleString()
                : 0}
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="h-[700px] bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 border border-gray-200 relative">
          <ResponsiveChoropleth
            data={filteredData}
            features={geo.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors={["#E5E7EB", "#93C5FD", "#60A5FA", "#3B82F6", "#1D4ED8"]}
            domain={[0, 1000000]}
            unknownColor="#E5E7EB"
            label="properties.name"
            projectionScale={projectionScale}
            projectionTranslation={[0.5, 0.65]}
            projectionRotation={[0, 0, 0]}
            enableGraticule={true}
            graticuleLineColor="rgba(0, 0, 0, 0.1)"
            borderWidth={0.5}
            borderColor="#374151"
            legends={[
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -60,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            theme={{
              background: "transparent",
              textColor: "#1E1B4B",
              tooltip: {
                container: {
                  background: "#fff",
                  color: "#111827",
                  fontSize: 14,
                  borderRadius: "12px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  border: "1px solid #E5E7EB",
                  padding: "12px 16px",
                },
              },
            }}
            tooltip={({ feature }) => {
              const countryData = mapData.find((d) => d.id === feature.id);
              return (
                <div className="bg-white p-4 rounded-lg shadow-xl border border-gray-200 min-w-[200px]">
                  <div className="font-bold text-indigo-700 text-lg mb-2">
                    {feature.properties?.name}
                  </div>
                  {countryData ? (
                    <>
                      <div className="text-green-600 font-semibold text-xl">
                        {countryData.value.toLocaleString()} developers
                      </div>
                      <div className="text-gray-500 text-sm mt-1">
                        Rank: #
                        {mapData
                          .sort((a, b) => b.value - a.value)
                          .findIndex((d) => d.id === feature.id) + 1}
                      </div>
                    </>
                  ) : (
                    <div className="text-gray-500">No data available</div>
                  )}
                </div>
              );
            }}
          />

          {/* Map Overlay Controls */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="text-sm font-semibold text-gray-700 mb-2">
              Map Controls
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedRange([0, 1000000])}
                className="w-full text-left px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors"
              >
                Reset Filter
              </button>
              <button
                onClick={() => setSearchTerm("")}
                className="w-full text-left px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
              >
                Clear Search
              </button>
            </div>
          </div>
        </div>

        {/* Top Countries List */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            🏆 Top Countries by Usage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mapData
              .sort((a, b) => b.value - a.value)
              .slice(0, 8)
              .map((country, index) => (
                <div
                  key={country.id}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-gray-800">
                        {country.name}
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-indigo-700">
                    {country.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">developers</div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #4f46e5;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #4f46e5;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
