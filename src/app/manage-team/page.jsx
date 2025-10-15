"use client";

import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./data.jsx";
import { useTeam } from "../../Context/TeamContext";

export default function ManageTeam() {
  const { rows } = useTeam();

  return (
    <div className="flex justify-center w-full bg-indigo-50 py-10">
      <div className="w-[85%] md:w-[70%]">
        <h1 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
          Manage Team Members
        </h1>

        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 h-[810px]">
          <DataGrid
            rows={rows}
            columns={columns}
            disableSelectionOnClick
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#EEF2FF", // Indigo-50
                color: "#3730A3", // Indigo-800
                fontWeight: "bold",
                fontSize: "15px",
              },
              "& .MuiDataGrid-cell": {
                color: "#1E1B4B", // Indigo-900-ish text
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#F5F3FF", // Slight Indigo hover
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#EEF2FF",
                color: "#312E81",
                fontWeight: 500,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
