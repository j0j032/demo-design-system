import styles from "./TextInput.module.scss";
import React, { forwardRef, Ref } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type TextInputProps = {
  label?: boolean; // default true
  type?: "text" | "password" | "email"; // default text
  showRequired?: boolean; // if you want to show the required sign
  showPlaceholder?: boolean; // if you want to show the placeholder
  specifyLabel?: string; // if you want to specify a different label than the inputName
  inputName: string; // the name of the input (required for react-hook-form & default label name)
  errorDisplay?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | Partial<{ type: string | number; message: string }> | undefined; // if you want to show the error message
  errors?: any; // the errors object from react-hook-form
};

export const TextInput: React.FC<TextInputProps> = forwardRef(
  ({ label = true, type = "text", showRequired = false, showPlaceholder = false, specifyLabel, inputName, errorDisplay, errors, ...otherProps }, ref) => (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={inputName}>
          {specifyLabel ? specifyLabel : inputName}
          {showRequired && <span> *</span>}
        </label>
      )}
      <input
        id={inputName}
        className={errorDisplay ? [styles.input, styles.inputError].join(" ") : styles.input}
        placeholder={showPlaceholder ? (specifyLabel ? specifyLabel : inputName) : undefined}
        type={type}
        ref={ref as Ref<HTMLInputElement>}
        autoComplete="off"
        {...otherProps}
      />
      {errorDisplay ? <ErrorMessage name={inputName} errors={errors && errors} render={({ message }) => <p className={styles.errorMsg}>{message}</p>} /> : <p className={styles.noError}></p>}
    </div>
  )
);
