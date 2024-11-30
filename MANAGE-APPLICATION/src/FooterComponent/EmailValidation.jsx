import { useState } from "react";

export const emailValidation = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isButtonGreen, setIsButtonGreen] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsButtonGreen(true);
      setEmail("");
      setTimeout(() => {
        setIsButtonGreen(false);
      }, 3000);
    } else {
      setIsValidEmail(false);
    }
  };

  return {
    email,
    setEmail,
    isValidEmail,
    setIsValidEmail,
    isButtonGreen,
    setIsButtonGreen,
    handleSubmit,
  };
};
