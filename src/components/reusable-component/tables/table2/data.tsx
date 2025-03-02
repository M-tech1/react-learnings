export const ITableHead = [
  { name: "name", label: "Name" },
  { name: "email", label: "Email" },
  { name: "role", label: "Role" },
];

export const ITableBody = [
  { id: "1", name: "Alice", email: "alice@example.com", role: "Admin" },
  { id: "2", name: "Bob", email: "bob@example.com", role: "User" },
];

export const ITableDropdownOptions = [
  { label: "Edit", action: (row) => console.log("Editing", row) },
  {
    label: "Delete",
    // action: (row) => console.log("Deleting", row),
    loading: false,
  },
];
