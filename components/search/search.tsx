import { useState } from "react";
import Select from "react-tailwindcss-select";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/features/filter/filterSlice";
import { RootState } from "@/app";
import { Option } from "react-tailwindcss-select/dist/components/type";

const options: Option[] = [
  { value: "all", label: "All" },
  { value: "rent", label: "Rent" },
  { value: "buy", label: "Buy" },
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
];

const App = () => {
  const objSelector: Option = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  const handleChange = (value: Option | Option[] | null | undefined) => {
    dispatch(setFilter(value));
  };
  return (
    <Select
      primaryColor={"indigo"}
      value={objSelector}
      onChange={handleChange}
      options={options}
      isSearchable
      classNames={{
        menuButton: () =>
          `flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none`,
        menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
        listItem: ({ isSelected }) =>
          `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
            isSelected
              ? `text-white bg-gray-500`
              : `text-gray-500 hover:bg-blue-100 hover:text-gray-500`
          }`,
      }}
    />
  );
};

export default App;
