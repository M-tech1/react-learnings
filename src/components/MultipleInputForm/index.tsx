import React, { useState } from "react";

interface FormData {
  checkboxes: {
    option1: boolean;
    option2: boolean;
    option3: boolean;
    option4: boolean;
    option5: boolean;
  };
  radio: string;
  date1: string;
  date2: string;
  select: string;
  textField: string;
}

const MultiInputForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    checkboxes: {
      option1: false,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
    },
    radio: "",
    date1: "",
    date2: "",
    select: "",
    textField: "",
  });

  const handleCheckboxChange = (name: keyof FormData["checkboxes"]) => {
    setFormData((prev) => ({
      ...prev,
      checkboxes: {
        ...prev.checkboxes,
        [name]: !prev.checkboxes[name],
      },
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 flex flex-col items-center"
    >
      {/* Checkboxes */}
      <fieldset className="space-y-2">
        <legend className="font-bold">Select Options (Checkboxes):</legend>
        {Object.keys(formData.checkboxes).map((key) => (
          <label key={key} className="block">
            <input
              type="checkbox"
              checked={
                formData.checkboxes[key as keyof typeof formData.checkboxes]
              }
              onChange={() =>
                handleCheckboxChange(key as keyof typeof formData.checkboxes)
              }
            />
            {key}
          </label>
        ))}
      </fieldset>

      {/* Radio Buttons */}
      <fieldset className="space-y-2">
        <div className="font-bold">Choose One (Radio):</div>
        {["A", "B", "C"].map((val) => (
          <label key={val} className="block">
            <input
              type="radio"
              name="radio"
              value={val}
              checked={formData.radio === val}
              onChange={handleChange}
            />
            {val}
          </label>
        ))}
      </fieldset>

      {/* Date Inputs */}
      <div>
        <label className="block">
          Start Date:
          <input
            type="date"
            name="date1"
            value={formData.date1}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
        <label className="block">
          End Date:
          <input
            type="date"
            name="date2"
            value={formData.date2}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
      </div>

      {/* Select Dropdown */}
      <div>
        <label>
          Choose a Category:
          <select
            name="select"
            value={formData.select}
            onChange={handleChange}
            className="ml-2"
          >
            <option value="">--Choose--</option>
            <option value="alpha">Alpha</option>
            <option value="beta">Beta</option>
            <option value="gamma">Gamma</option>
          </select>
        </label>
      </div>

      {/* Text Field */}
      <div>
        <label>
          Extra Notes:
          <input
            type="text"
            name="textField"
            value={formData.textField}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default MultiInputForm;
