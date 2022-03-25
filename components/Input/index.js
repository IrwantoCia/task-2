import React from "react";
import styles from "./style.module.css";

const Message = ({
                     required,
                     value,
                     errorMessage,
                     showError,
                     showErrorEmailNotValid,
                     errorEmailNotValidMessage,
                     checkValue,
                 }) => {
    if (required && !value && showError) {
        return <p className={styles.errorMessage}>{errorMessage}</p>;
    }

    if (showErrorEmailNotValid) {
        return <p className={styles.errorMessage}>{errorEmailNotValidMessage}</p>;
    }

    if ((checkValue && value && showError) || errorMessage) {
        return <p className={styles.errorMessage}>{errorMessage}</p>;
    }

    return null;
};

const renderComponent = (variant, value, placeholder, onChange, type, onBlur, name) => {
    if (variant === "textarea") {
        return (
            <textarea
                className={styles.textAreaValue}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
        );
    } else if (variant === "textareafull") {
        return (
            <textarea
                className={styles.textArea}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
        );
    } else if (variant === "textfield") {
        return (
            <input
                className={styles.input}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
            />
        );
    } else {
        return (
            <input className={styles.input} type={type} value={value} placeholder={placeholder}
                   onChange={onChange} onBlur={onBlur} name={name}/>
        );
    }
};

const Input = ({
                   onChange,
                   onBlur,
                   name,
                   placeholder,
                   type,
                   value,
                   errorMessage,
                   showError,
                   label,
                   required,
                   errorEmailNotValidMessage,
                   showErrorEmailNotValid,
                   checkValue = false,
                   variant = "input",
                   id,
               }) => {
    return (
        <div className={styles.inputWrapper}>
            {label ? <p className={styles.label}>{label}</p> : null}
            <div>{renderComponent(variant, value, placeholder, onChange, type, onBlur, name)}</div>

            <Message
                required={required}
                value={value}
                errorMessage={errorMessage}
                showError={showError}
                showErrorEmailNotValid={showErrorEmailNotValid}
                errorEmailNotValidMessage={errorEmailNotValidMessage}
                checkValue={checkValue}
                id={id}
            />
        </div>
    );
};

export default Input;
