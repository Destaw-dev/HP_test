import React, { JSX, useState } from 'react';
import { HiOutlineXMark } from "react-icons/hi2";

interface InputFieldProps {
  type: string;
  placeholder?: string;
  className?: string;
  icon?: JSX.Element;
}

function InputField({ type, placeholder, className, icon }: InputFieldProps): JSX.Element {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="relative">
      {icon && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-primary">
          {icon}
        </span>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full border rounded-4xl py-3 pr-8 text-sm lg:text-base bg-white text-[#16254F] focus:outline-none ${className}`}
      />

        <button
        type="button"
          onClick={handleClear}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <HiOutlineXMark />
        </button>
    </div>
  );
}

export default InputField;
