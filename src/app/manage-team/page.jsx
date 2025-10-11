"use client";

import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./data.jsx";
import { useTeam } from "../../Context/TeamContext";

export default function ManageTeam() {
  const { rows } = useTeam();

  return (
    <div className="h-[960px] w-full flex justify-center">
      <div className="w-[90%]">
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}
