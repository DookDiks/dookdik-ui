import React from "react";
import clsx from "clsx";
// import "./input.css";
import "./input.css";
import { InputProps } from ".";

const Input: React.FC<InputProps> = ({
	className,
	varients = "default",
	...restProps
}) => {
	return (
		<>
			<input className={clsx("input", varients, className)} {...restProps} />
		</>
	);
};

export { Input };
