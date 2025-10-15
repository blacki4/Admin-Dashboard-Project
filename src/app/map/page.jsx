"use client";

import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./world_countries.jsx";

export default function Map() {
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
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center bg-indigo-50 py-10">
      <div className="w-[95%] max-w-7xl p-6 bg-white shadow-xl rounded-3xl">
        <h1 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
          Global Programming Language Usage
        </h1>
        <div className="h-[700px]">
          <ResponsiveChoropleth
            data={mapData}
            features={geo.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor="#d1d5db"
            label="properties.name"
            projectionScale={145}
            projectionTranslation={[0.5, 0.65]}
            valueFormat=".2s"
            borderWidth={0.5}
            borderColor="#374151"
            legends={[
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -40,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: "#4b5563",
                itemOpacity: 0.9,
                symbolSize: 18,
              },
            ]}
            tooltip={({ feature }) => (
              <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                <div className="text-indigo-700 font-semibold">
                  {feature.properties.name}
                </div>
                <div className="text-green-600 font-medium">
                  {feature.data?.value?.toLocaleString() ?? 0}
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
