"use client";

import React from "react";
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Package,
  Users,
  Download,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const revenueData = [
    { day: "Mon", online: 15, offline: 10 },
    { day: "Tue", online: 12, offline: 8 },
    { day: "Wed", online: 18, offline: 5 },
    { day: "Thu", online: 14, offline: 7 },
    { day: "Fri", online: 12, offline: 10 },
    { day: "Sat", online: 16, offline: 12 },
    { day: "Sun", online: 20, offline: 12 },
  ];

  const satisfactionData = [
    { month: "Jan", lastMonth: 3.2, thisMonth: 4.1 },
    { month: "Feb", lastMonth: 3.5, thisMonth: 4.0 },
    { month: "Mar", lastMonth: 3.3, thisMonth: 3.8 },
    { month: "Apr", lastMonth: 3.0, thisMonth: 4.3 },
    { month: "May", lastMonth: 2.8, thisMonth: 4.2 },
    { month: "Jun", lastMonth: 3.4, thisMonth: 4.0 },
    { month: "Jul", lastMonth: 3.6, thisMonth: 4.6 },
    { month: "Aug", lastMonth: 3.3, thisMonth: 4.3 },
    { month: "Sep", lastMonth: 3.1, thisMonth: 4.0 },
    { month: "Oct", lastMonth: 3.5, thisMonth: 3.8 },
    { month: "Nov", lastMonth: 3.7, thisMonth: 4.5 },
    { month: "Dec", lastMonth: 3.4, thisMonth: 4.4 },
  ];

  const targetData = [
    { month: "Jan", reality: 18, target: 20 },
    { month: "Feb", reality: 19, target: 22 },
    { month: "Mar", reality: 17, target: 21 },
    { month: "Apr", reality: 23, target: 24 },
    { month: "May", reality: 20, target: 23 },
    { month: "Jun", reality: 22, target: 25 },
    { month: "Jul", reality: 24, target: 26 },
    { month: "Aug", reality: 25, target: 27 },
    { month: "Sep", reality: 26, target: 28 },
  ];

  const visitorData = [
    { month: "Jan", loyal: 820, new: 450, unique: 600 },
    { month: "Feb", loyal: 780, new: 500, unique: 620 },
    { month: "Mar", loyal: 750, new: 520, unique: 590 },
    { month: "Apr", loyal: 700, new: 480, unique: 560 },
    { month: "May", loyal: 740, new: 510, unique: 580 },
    { month: "Jun", loyal: 820, new: 560, unique: 610 },
    { month: "Jul", loyal: 880, new: 600, unique: 670 },
    { month: "Aug", loyal: 760, new: 520, unique: 590 },
    { month: "Sep", loyal: 810, new: 550, unique: 620 },
    { month: "Oct", loyal: 790, new: 530, unique: 610 },
    { month: "Nov", loyal: 750, new: 490, unique: 580 },
    { month: "Dec", loyal: 730, new: 470, unique: 560 },
  ];

  const volumeServiceData = [
    { month: "Jan", volume: 750, service: 640 },
    { month: "Feb", volume: 820, service: 680 },
    { month: "Mar", volume: 780, service: 650 },
    { month: "Apr", volume: 840, service: 690 },
    { month: "May", volume: 800, service: 660 },
    { month: "Jun", volume: 760, service: 630 },
  ];

  const topProducts = [
    {
      id: 1,
      name: "Home Decor Range",
      popularity: 85,
      sales: "40%",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Disney Princess Pink Bag",
      popularity: 70,
      sales: "29%",
      color: "bg-teal-500",
    },
    {
      id: 3,
      name: "Bathroom Essentials",
      popularity: 55,
      sales: "18%",
      color: "bg-purple-500",
    },
    {
      id: 4,
      name: "Apple Smartwatches",
      popularity: 60,
      sales: "22%",
      color: "bg-orange-500",
    },
    {
      id: 5,
      name: "Gaming Headset Pro X",
      popularity: 90,
      sales: "45%",
      color: "bg-red-500",
    },
    {
      id: 6,
      name: "Minimalist Desk Lamp",
      popularity: 50,
      sales: "15%",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 w-full overflow-x-hidden">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mb-2">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Today's Sales
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm">Sales Summary</p>
          </div>
          <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-indigo-800 border border-indigo-400 rounded-lg hover:bg-indigo-600 cursor-pointer transition-colors w-fit self-end sm:self-auto">
            <Download size={16} className="sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base">Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-4 sm:p-6 rounded-xl">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-400 rounded-lg flex items-center justify-center">
              <ShoppingCart className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
            $1k
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-2">Total Sales</p>
          <p className="text-pink-600 text-xs flex items-center gap-1">
            <TrendingDown size={12} className="sm:w-3 sm:h-3" />
            1.5% from yesterday
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-4 sm:p-6 rounded-xl">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-400 rounded-lg flex items-center justify-center">
              <ShoppingCart className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
            300
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-2">Total Order</p>
          <p className="text-orange-600 text-xs flex items-center gap-1">
            <TrendingUp size={12} className="sm:w-3 sm:h-3" />
            0.5% from yesterday
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 sm:p-6 rounded-xl">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-400 rounded-lg flex items-center justify-center">
              <Package className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
            5
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-2">Product Sold</p>
          <p className="text-green-600 text-xs flex items-center gap-1">
            <TrendingUp size={12} className="sm:w-3 sm:h-3" />
            1.2% from yesterday
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 sm:p-6 rounded-xl">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-400 rounded-lg flex items-center justify-center">
              <Users className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
            8
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-2">New Customers</p>
          <p className="text-purple-600 text-xs flex items-center gap-1">
            <TrendingUp size={12} className="sm:w-3 sm:h-3" />
            0.5% from yesterday
          </p>
        </div>
      </div>

      {/* Visitor Insights */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
          Visitor Insights
        </h2>
        <div className="h-48 sm:h-56 md:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={visitorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                stroke="#999"
                fontSize={12}
                tick={{ fill: "#666" }}
              />
              <YAxis stroke="#999" fontSize={12} tick={{ fill: "#666" }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
              <Line
                type="monotone"
                dataKey="loyal"
                stroke="#8b5cf6"
                strokeWidth={2}
                name="Loyal Customers"
                dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="new"
                stroke="#ef4444"
                strokeWidth={2}
                name="New Customers"
                dot={{ fill: "#ef4444", strokeWidth: 2, r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="unique"
                stroke="#10b981"
                strokeWidth={2}
                name="Unique Customers"
                dot={{ fill: "#10b981", strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row 2 - Revenue, Satisfaction, Target */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Total Revenue */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            Total Revenue
          </h2>
          <div className="h-48 sm:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="day"
                  stroke="#999"
                  fontSize={11}
                  tick={{ fill: "#666" }}
                />
                <YAxis stroke="#999" fontSize={11} tick={{ fill: "#666" }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "11px" }} />
                <Bar
                  dataKey="online"
                  fill="#06b6d4"
                  name="Online Sales"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="offline"
                  fill="#10b981"
                  name="Offline Sales"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-around mt-3 sm:mt-4">
            <div className="text-center">
              <p className="text-gray-600 text-xs">Avg Online Sales</p>
              <p className="text-base sm:text-lg font-bold text-cyan-600">
                $
                {(
                  revenueData.reduce((sum, item) => sum + item.online, 0) /
                  revenueData.length
                ).toFixed(1)}
                k
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-xs">Avg Offline Sales</p>
              <p className="text-base sm:text-lg font-bold text-green-600">
                $
                {(
                  revenueData.reduce((sum, item) => sum + item.offline, 0) /
                  revenueData.length
                ).toFixed(1)}
                k
              </p>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            Customer Satisfaction
          </h2>
          <div className="h-48 sm:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={satisfactionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  stroke="#999"
                  fontSize={11}
                  tick={{ fill: "#666" }}
                />
                <YAxis
                  stroke="#999"
                  domain={[0, 5]}
                  fontSize={11}
                  tick={{ fill: "#666" }}
                />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "11px" }} />
                <Line
                  type="monotone"
                  dataKey="lastMonth"
                  stroke="#60a5fa"
                  strokeWidth={2}
                  name="Last Month"
                  dot={{ fill: "#60a5fa", strokeWidth: 2, r: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="thisMonth"
                  stroke="#34d399"
                  strokeWidth={2}
                  name="This Month"
                  dot={{ fill: "#34d399", strokeWidth: 2, r: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-around mt-3 sm:mt-4">
            <div className="text-center">
              <p className="text-gray-600 text-xs">Last Month</p>
              <p
                className="text-base sm:text-lg font-bold"
                style={{ color: "#60a5fa" }}
              >
                $2,004
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-xs">This Month</p>
              <p
                className="text-base sm:text-lg font-bold"
                style={{ color: "#34d399" }}
              >
                $4,504
              </p>
            </div>
          </div>
        </div>

        {/* Target vs Reality */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            Target vs Reality
          </h2>
          <div className="h-48 sm:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={targetData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  stroke="#999"
                  fontSize={11}
                  tick={{ fill: "#666" }}
                />
                <YAxis stroke="#999" fontSize={11} tick={{ fill: "#666" }} />
                <Tooltip />
                <Bar dataKey="reality" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" fill="#fbbf24" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-2 mt-3 sm:mt-4">
            <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
              <span className="text-xs sm:text-sm text-gray-700">
                Reality Sales
              </span>
              <span className="font-bold text-green-600 text-sm sm:text-base">
                5,823
              </span>
            </div>
            <div className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg">
              <span className="text-xs sm:text-sm text-gray-700">
                Target Sales
              </span>
              <span className="font-bold text-yellow-600 text-sm sm:text-base">
                17,129
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 - Products, Map, Volume */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Top Products */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm xl:col-span-1">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            Top Products
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2">
              <span className="w-8 text-center">#</span>
              <span className="flex-1 ml-2">Name</span>
              <span className="w-16 text-center">Sales</span>
            </div>
            {topProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-2 sm:gap-3"
              >
                <span className="text-gray-600 font-medium text-xs sm:text-sm w-8 text-center">
                  {String(product.id).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">
                    {product.name}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mt-1">
                    <div
                      className={`h-1.5 sm:h-2 rounded-full ${product.color}`}
                      style={{ width: `${product.popularity}%` }}
                    />
                  </div>
                </div>
                <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium whitespace-nowrap">
                  {product.sales}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Mapping by Country */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm xl:col-span-1">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            Sales Mapping by Country
          </h2>
          <div className="flex items-center justify-center h-48 sm:h-56 md:h-64 bg-gray-100 rounded-lg">
            <div className="text-center text-gray-500">
              <p className="text-sm sm:text-base">World Map Visualization</p>
              <p className="text-xs mt-2">Interactive map would appear here</p>
            </div>
          </div>
        </div>

        {/* Volume vs Service Level */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm xl:col-span-1">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            Volume vs Service Level
          </h2>
          <div className="h-48 sm:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeServiceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  stroke="#999"
                  fontSize={11}
                  tick={{ fill: "#666" }}
                />
                <YAxis stroke="#999" fontSize={11} tick={{ fill: "#666" }} />
                <Tooltip />
                <Bar dataKey="volume" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                <Bar dataKey="service" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-around mt-3 sm:mt-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-600">Volume</span>
              </div>
              <p className="text-base sm:text-lg font-bold mt-1 text-cyan-500">
                1,136
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-600">
                  Services
                </span>
              </div>
              <p className="text-base sm:text-lg font-bold mt-1 text-green-500">
                635
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
