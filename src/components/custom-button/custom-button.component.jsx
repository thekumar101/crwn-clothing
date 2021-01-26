import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSIgnIn, ...otherProps }) => {
  return <button className={`${isGoogleSIgnIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>;
};

export default CustomButton;
