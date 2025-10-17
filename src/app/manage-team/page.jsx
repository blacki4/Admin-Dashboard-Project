"use client";

import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./data.jsx";
import { useTeam } from "../../Context/TeamContext";
import { useState, useMemo } from "react";
import { Search, Download, Plus, Edit, Trash2, UserX } from "lucide-react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Snackbar,
  Alert,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";

export default function ManageTeam() {
  const { rows, setRows } = useTeam();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const filteredRows = useMemo(() => {
    if (!searchTerm) return rows;

    return rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [rows, searchTerm]);

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (userToDelete) {
      const newRows = rows.filter((row) => row.id !== userToDelete.id);
      setRows(newRows);
      setSnackbar({
        open: true,
        message: `User ${userToDelete.Name} has been deleted successfully`,
        severity: "success",
      });
    }
    setDeleteDialogOpen(false);
    setUserToDelete(null);
  };

  const handleBulkDelete = () => {
    if (selectedRows.length > 0) {
      const newRows = rows.filter((row) => !selectedRows.includes(row.id));
      setRows(newRows);
      setSnackbar({
        open: true,
        message: `${selectedRows.length} users deleted successfully`,
        severity: "success",
      });
      setSelectedRows([]);
    }
  };

  const exportData = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "ID,Name,Email,Age,Phone,Access\n" +
      rows
        .map(
          (row) =>
            `${row.id},"${row.Name}",${row.Email},${row.Age},${row.Phone},${row.Access}`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "team_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSnackbar({
      open: true,
      message: "Data exported successfully!",
      severity: "success",
    });
  };

  const getAccessColor = (access) => {
    switch (access) {
      case "admin":
        return "error";
      case "manager":
        return "warning";
      case "user":
        return "success";
      default:
        return "default";
    }
  };

  const enhancedColumns = [
    ...columns,
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <div className="flex gap-1">
          <Tooltip title="Edit User">
            <IconButton
              size="small"
              className="text-blue-600 hover:bg-blue-50"
              onClick={() => {
                console.log("Edit user:", params.row);
              }}
            >
              <Edit size={16} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete User">
            <IconButton
              size="small"
              className="text-red-600 hover:bg-red-50"
              onClick={() => handleDeleteClick(params.row)}
            >
              <Trash2 size={16} />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-center w-full bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen py-10">
      <div className="w-[95%] max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
              <UserX className="text-indigo-600" size={32} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-indigo-800 mb-2">
            Manage Team Members
          </h1>
          <p className="text-gray-600 text-lg">
            View and manage your team members with advanced controls
          </p>
        </div>

        {/* Controls Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 animate-scale-in">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-black w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Stats */}
            <div className="flex gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-indigo-700">
                  {rows.length}
                </div>
                <div className="text-sm text-gray-500">Total</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {rows.filter((r) => r.Access === "admin").length}
                </div>
                <div className="text-sm text-gray-500">Admins</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {rows.filter((r) => r.Access === "manager").length}
                </div>
                <div className="text-sm text-gray-500">Managers</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {selectedRows.length > 0 && (
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<Trash2 size={18} />}
                  onClick={handleBulkDelete}
                  className="hover:scale-105 transition-transform"
                >
                  Delete ({selectedRows.length})
                </Button>
              )}
              <Button
                variant="outlined"
                startIcon={<Download size={18} />}
                onClick={exportData}
                className="hover:scale-105 transition-transform"
              >
                Export
              </Button>
              <Button
                variant="contained"
                startIcon={<Plus size={18} />}
                href="/add-user"
                className="bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-transform"
              >
                Add Member
              </Button>
            </div>
          </div>
        </div>

        {/* Data Grid Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-fade-in-up">
          <DataGrid
            rows={filteredRows}
            columns={enhancedColumns}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(newSelection) => {
              setSelectedRows(newSelection);
            }}
            selectionModel={selectedRows}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            autoHeight
            sx={{
              border: "none",
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#EEF2FF",
                color: "#3730A3",
                fontWeight: "bold",
                fontSize: "15px",
                borderBottom: "2px solid #E5E7EB",
              },
              "& .MuiDataGrid-cell": {
                color: "#1E1B4B",
                borderBottom: "1px solid #F3F4F6",
              },
              "& .MuiDataGrid-row": {
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: "#F5F3FF",
                  transform: "translateX(4px)",
                },
                "&.Mui-selected": {
                  backgroundColor: "#EDE9FE",
                  "&:hover": {
                    backgroundColor: "#DDD6FE",
                  },
                },
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#F8FAFC",
                color: "#312E81",
                fontWeight: 500,
                borderTop: "1px solid #E5E7EB",
              },
              "& .MuiDataGrid-toolbar": {
                padding: "16px",
              },
              "& .MuiTablePagination-root": {
                color: "#4B5563",
              },
            }}
            componentsProps={{
              toolbar: {
                sx: {
                  backgroundColor: "#F8FAFC",
                },
              },
            }}
          />
        </div>

        {/* Empty State */}
        {filteredRows.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg mt-6 animate-fade-in">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserX className="text-gray-400" size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No team members found
            </h3>
            <p className="text-gray-500 mb-6">
              {searchTerm
                ? "Try adjusting your search terms"
                : "Get started by adding your first team member"}
            </p>
            <Button
              variant="contained"
              startIcon={<Plus size={18} />}
              href="/add-user"
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Add Team Member
            </Button>
          </div>
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
          PaperProps={{
            sx: { borderRadius: "16px", padding: "8px" },
          }}
        >
          <DialogTitle className="text-red-600 font-bold">
            Confirm Deletion
          </DialogTitle>
          <DialogContent>
            <p className="text-gray-700">
              Are you sure you want to delete{" "}
              <strong>{userToDelete?.Name}</strong>? This action cannot be
              undone.
            </p>
          </DialogContent>
          <DialogActions className="gap-2 p-4">
            <Button
              onClick={() => setDeleteDialogOpen(false)}
              variant="outlined"
              className="border-gray-300 text-gray-700"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeleteConfirm}
              variant="contained"
              color="error"
              className="bg-red-600 hover:bg-red-700"
            >
              Delete User
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{
              borderRadius: "12px",
              fontWeight: "500",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
