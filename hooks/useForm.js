import { useCallback, useRef, useState } from "react";

const useForm = (initialValues = {}, validate = null, sanitize = null) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const initial = useRef(initialValues);

  const checkValid = () => {
    let isValid = true;
    for (const [key, value] of Object.entries(formData)) {
      const validationResult = validate[key] ? validate[key](value) : null;
      setErrors(prevState => {
        return {
          ...prevState,
          [key]: validationResult,
        };
      });

      if (validationResult && isValid) {
        isValid = false;
      }
    }

    return isValid;
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: sanitize[name] ? sanitize[name](value) : value,
    });
  };

  const handleBlur = event => {
    const { name, value } = event.target;

    setErrors({
      ...errors,
      [name]: validate[name] ? validate[name](value) : null,
    });
  };

  const initialize = useCallback(initialValues => {
    if (!initialValues) {
      setFormData(initial.current);
    } else {
      initial.current = initialValues;
      setFormData(initialValues);
    }
  }, []);

  return {formData, handleChange, handleBlur, errors, initialize, checkValid};
};

export default useForm;
