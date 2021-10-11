import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const resetForm = () => setValues(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return { ...values, values, handleChange, resetForm };
};
