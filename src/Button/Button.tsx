import React from "react";
import clsx from "clsx";
import "./button.css";
import { ButtonProps } from ".";

const Button: React.FC<ButtonProps> = ({
	className,
	varients = "default",
	...restProps
}) => {
	return (
		<>
			<button className={clsx("button", varients, className)} {...restProps} />
		</>
	);
};

export { Button };
