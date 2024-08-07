import React from "react";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return <button className="w-full px-10 py-2 text-sm text-txt-primary rounded-[4px] bg-button-primary hover:bg-button-secondary active:bg-button-primary">{text}</button>;
};

export default Button;
