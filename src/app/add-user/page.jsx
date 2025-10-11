"use client";

import { useTeam } from "../../Context/TeamContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, MenuItem } from "@mui/material";

export default function AddUser() {
  const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^(\(\d{3}\)\s?|\d{3}-?)\d{3}-?\d{4}$/;
  const ageRegex = /^(?:1[01][0-9]|120|[1-9]?[0-9])$/;

  const { rows, setRows } = useTeam();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
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
  };

  return (
    <div className="w-full flex justify-center items-center -mt-[400px]">
      <form
        className="flex flex-col bg-white p-5 rounded-lg w-4/5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-4">
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName) ? "This field is required" : null
            }
            {...register("firstName", { required: true })}
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName) ? "This field is required" : null
            }
            {...register("lastName", { required: true })}
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
          />
        </div>

        <TextField
          error={Boolean(errors.age)}
          helperText={Boolean(errors.age) ? "Please provide a valid age" : null}
          {...register("age", { required: true, pattern: ageRegex })}
          label="Age"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
        />

        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email) ? "Please provide a valid Email addres" : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
        />

        <TextField
          error={Boolean(errors.phone)}
          helperText={
            Boolean(errors.phone) ? "Please provide a valid Phone number" : null
          }
          {...register("phone", { required: true, pattern: phoneRegex })}
          label="Phone"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
        />

        <TextField
          label="Role"
          {...register("access")}
          select
          fullWidth
          margin="normal"
          size="small"
          defaultValue="user"
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
          <MenuItem value="user">User</MenuItem>
        </TextField>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            mt: 2,
            fontWeight: "bold",
            backgroundColor: "#3730A3",
            "&:hover": {
              transform: "scale(1.006)",
              backgroundColor: "#312E81",
            },
            transition: "all 0.15s ease-in-out",
          }}
        >
          Add
        </Button>
      </form>
    </div>
  );
}
