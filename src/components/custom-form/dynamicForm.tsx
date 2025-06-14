// import React, { useState } from "react";

// interface FormField {
//   name: string;
//   label: string;
//   type?: "text" | "password" | "checkbox" | "radiobox" | "select";
//   options?: { value: string; label: string };
//   validation?: (value: string | boolean) => string | null;
// }

// interface customFormField {
//   fields: FormField[];
//   onSubmit: (data: Record<string, string | boolean>) => void;
//   buttonLabel?: string;
// }

// export default function DynamicForm({
//   fields,
//   onSubmit,
//   buttonLabel,
// }: customFormField) {
//   const [formData, setFormData] = useState<Record<string, string | boolean>>(
//     {}
//   );
//   const [Errors, setErrors] = useState("");

//   const [error, setError] = useState<Record<string, string>>({});

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, type, value, checked } = e.target as HTMLInputElement;
//     const newValue = type === "checkbox" ? checked : value;
//     setFormData;
//     (prev) => ({ ...prev, [name]: newValue });

//     // validation
//     const field = fields.find((f) => f.name === name);
//     if (field?.validation) {
//       const errorMessage = field.validation(newValue);
//       setError((prev) => ({ ...prev, [name]: errorMessage || "" }));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     let valid = true;
//     const newErrors: Record<string, string> = {};

//     fields.forEach(({ name, validation }) => {
//       if (validation) {
//         const errorMessage = validation(formData[name] || "");
//         if (errorMessage) {
//           newErrors[name] = errorMessage;
//           valid = false;
//         }
//       }
//     });

//     // setErrors(newErrors);
//     if (valid) {
//       onSubmit(formData);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-md rounded-lg">
//       {fields.map(({ name, label, type = "text", options }) => (
//         <div key={name} className="flex flex-col">
//           <label className="font-medium">{label}</label>

//           {/* Render different input types */}
//           {type === "checkbox" ? (
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 name={name}
//                 checked={!!formData[name]}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               <span>{label}</span>
//             </div>
//           ) : type === "radio" ? (
//             <div className="flex space-x-4">
//               {options?.map(({ value, label }) => (
//                 <label key={value} className="flex items-center">
//                   <input
//                     type="radio"
//                     name={name}
//                     value={value}
//                     checked={formData[name] === value}
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   {label}
//                 </label>
//               ))}
//             </div>
//           ) : type === "select" ? (
//             <select
//               name={name}
//               value={formData[name] as string || ""}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select an option</option>
//               {options?.map(({ value, label }) => (
//                 <option key={value} value={value}>
//                   {label}
//                 </option>
//               ))}
//             </select>
//           ) : (
//             <input
//               type={type}
//               name={name}
//               value={formData[name] as string || ""}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           )}

//           {/* {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>} */}
//         </div>
//       ))}

//       <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
//         {buttonLabel}
//       </button>
//     </form>
//     </>
//   );
// }
