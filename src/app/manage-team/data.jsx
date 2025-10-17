export const rows = [
  {
    id: 1,
    Name: "Jon Snow",
    Email: "jonsnow@gmail.com",
    Age: 36,
    Phone: "(444)555-6234",
    Access: "user",
  },
  {
    id: 2,
    Name: "Arya Stark",
    Email: "arya.stark@gmail.com",
    Age: 22,
    Phone: "(123)456-7890",
    Access: "admin",
  },
  {
    id: 3,
    Name: "Daenerys Targaryen",
    Email: "daenerys.t@gmail.com",
    Age: 28,
    Phone: "(321)654-9870",
    Access: "manager",
  },
  {
    id: 4,
    Name: "Tyrion Lannister",
    Email: "tyrion.lan@gmail.com",
    Age: 41,
    Phone: "(555)123-4567",
    Access: "user",
  },
  {
    id: 5,
    Name: "Cersei Lannister",
    Email: "cersei.l@gmail.com",
    Age: 38,
    Phone: "(555)987-6543",
    Access: "manager",
  },
  {
    id: 6,
    Name: "Robb Stark",
    Email: "robb.stark@gmail.com",
    Age: 30,
    Phone: "(555)765-4321",
    Access: "admin",
  },
  {
    id: 7,
    Name: "Sansa Stark",
    Email: "sansa.s@gmail.com",
    Age: 25,
    Phone: "(333)111-2222",
    Access: "user",
  },
  {
    id: 8,
    Name: "Jorah Mormont",
    Email: "jorah.m@gmail.com",
    Age: 45,
    Phone: "(222)333-4444",
    Access: "manager",
  },
  {
    id: 9,
    Name: "Samwell Tarly",
    Email: "sam.tarly@gmail.com",
    Age: 29,
    Phone: "(444)222-1111",
    Access: "admin",
  },
  {
    id: 10,
    Name: "Bran Stark",
    Email: "bran.s@gmail.com",
    Age: 19,
    Phone: "(999)888-7777",
    Access: "user",
  },
];

export const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Name",
    headerName: "Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
    minWidth: 150,
  },
  {
    field: "Email",
    headerName: "Email",
    flex: 1,
    align: "center",
    headerAlign: "center",
    minWidth: 200,
  },
  {
    field: "Age",
    headerName: "Age",
    width: 80,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Phone",
    headerName: "Phone",
    flex: 1,
    align: "center",
    headerAlign: "center",
    minWidth: 150,
  },
  {
    field: "Access",
    headerName: "Access",
    width: 120,
    align: "center",
    headerAlign: "center",
    renderCell: ({ row: { Access } }) => {
      let bgColor = "";
      let textColor = "";

      if (Access === "admin") {
        bgColor = "bg-red-100";
        textColor = "text-red-600";
      } else if (Access === "manager") {
        bgColor = "bg-yellow-100";
        textColor = "text-yellow-600";
      } else {
        bgColor = "bg-green-100";
        textColor = "text-green-600";
      }

      const displayText =
        Access.charAt(0).toUpperCase() + Access.slice(1).toLowerCase();

      return (
        <div
          className={`mt-3 px-3 py-1 rounded-full text-sm font-semibold ${bgColor} ${textColor} w-[100px] text-center mx-auto`}
        >
          {displayText}
        </div>
      );
    },
  },
];
