"use client";

import { useTeam } from "../../Context/TeamContext";
import { useForm } from "react-hook-form";
import { TextField, Button, MenuItem, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { CheckCircle, UserPlus } from "lucide-react";

export default function AddUser() {
  const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^(\(\d{3}\)\s?|\d{3}-?)\d{3}-?\d{4}$/;
  const ageRegex = /^(?:1[01][0-9]|120|[1-9]?[0-9])$/;

  const { rows, setRows } = useTeam();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 1;

    const newRow = {
      id: newId,
      Name: data.firstName + " " + data.lastName,
      Email: data.email,
      Age: data.age,
      Phone: data.phone,
      Access: data.access,
    };

    setRows([...rows, newRow]);
    reset();
    setOpenSnackbar(true);
    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center w-full bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen py-10">
      <div className="w-[85%] md:w-[70%] lg:w-[50%]">
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
              <UserPlus className="text-indigo-600" size={32} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-indigo-800 mb-2">
            Add New Team Member
          </h1>
          <p className="text-gray-600 text-lg">
            Fill in the details below to add a new team member
          </p>
        </div>

        <form
          className="flex flex-col bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <TextField
              error={Boolean(errors.firstName)}
              helperText={errors.firstName ? "First name is required" : ""}
              {...register("firstName", { required: true })}
              label="First Name"
              variant="outlined"
              fullWidth
              size="medium"
              className="animate-slide-in-left"
            />
            <TextField
              error={Boolean(errors.lastName)}
              helperText={errors.lastName ? "Last name is required" : ""}
              {...register("lastName", { required: true })}
              label="Last Name"
              variant="outlined"
              fullWidth
              size="medium"
              className="animate-slide-in-right"
            />
          </div>

          <TextField
            error={Boolean(errors.age)}
            helperText={errors.age ? "Please enter a valid age (1-120)" : ""}
            {...register("age", { required: true, pattern: ageRegex })}
            label="Age"
            variant="outlined"
            fullWidth
            margin="normal"
            size="medium"
            className="animate-slide-in-left"
          />

          <TextField
            error={Boolean(errors.email)}
            helperText={
              errors.email ? "Please enter a valid email address" : ""
            }
            {...register("email", { required: true, pattern: regEmail })}
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            size="medium"
            className="animate-slide-in-right"
          />

          <TextField
            error={Boolean(errors.phone)}
            helperText={errors.phone ? "Please enter a valid phone number" : ""}
            {...register("phone", { required: true, pattern: phoneRegex })}
            label="Phone"
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            size="medium"
            className="animate-slide-in-left"
          />

          <TextField
            label="Role"
            {...register("access")}
            select
            fullWidth
            margin="normal"
            size="medium"
            defaultValue="user"
            className="animate-slide-in-right"
          >
            <MenuItem value="admin" className="text-red-600">
              Admin
            </MenuItem>
            <MenuItem value="manager" className="text-orange-600">
              Manager
            </MenuItem>
            <MenuItem value="user" className="text-green-600">
              User
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
            startIcon={isSubmitting ? null : <CheckCircle />}
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1.1rem",
              background: "linear-gradient(135deg, #3730A3 0%, #6366F1 100%)",
              "&:hover": {
                transform: "translateY(-2px)",
                background: "linear-gradient(135deg, #312E81 0%, #4F46E5 100%)",
                boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)",
              },
              "&:disabled": {
                background: "#9CA3AF",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            {isSubmitting ? "Adding Member..." : "Add Team Member"}
          </Button>
        </form>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{
              background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              color: "white",
              fontWeight: "bold",
              borderRadius: "12px",
            }}
          >
            Team member added successfully! 🎉
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
