import React, { useState, useEffect } from "react";
import { ErrorMessage, useField } from "formik";

interface InputFieldProps {
  label?: string;
  className?: any;
  password?: any;
  name: string;
  placeholder?: string;
}

const InputField = ({
  label,
  className,
  password,
  placeholder,
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(props);
  const [labelColor, setLabelColor] = useState(false);

  let type;
  if (password) {
    type = "password";
  } else {
    type = "text";
  }

  const [inputType, setInputType] = useState(type);

  const toggleInputType = () => {
    if (password) {
      if (inputType === "text") {
        setInputType("password");
      }

      if (inputType === "password") {
        setInputType("text");
      }
    }
  };

  const handleFocus = () => {
    setLabelColor(true);
  };

  const handleBlur = () => {
    setLabelColor(false);
  };

  useEffect(() => {
    if (!password) {
      setInputType("text");
    }
  }, [password]);

  return (
    <div className={`input ${className ? className : ""}`}>
      <label
        htmlFor={field.name}
        className={`input__label ${meta.touched && meta.error && "error"} ${
          labelColor ? "focused" : ""
        }`}
      >
        {label}
      </label>
      <input
        className={`input__field ${meta.touched && meta.error && "error"}`}
        {...field}
        {...props}
        type={inputType}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
        placeholder={placeholder}
      />

      {password && (
        <span
          className={`input__eye heading-2-bold ${
            inputType === "password" ? "close" : ""
          }`}
          onClick={toggleInputType}
        >
          Show
        </span>
      )}
      <ErrorMessage component="p" name={field.name} className="input__error" />
    </div>
  );
};

export default InputField;
