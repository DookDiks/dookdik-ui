import React, { useState, ChangeEvent, useEffect } from "react";
import { Input, InputProps } from ".";

const NumberInput: React.FC<InputProps> = ({
	onChange,
	varients = "default",
	value: valueDefault,
	...restProps
}) => {
	const [value, setValue] = useState(valueDefault);

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const isValid = /^[0-9]*$/.test(event.target.value);

		const changeValue = Number.parseInt(event.target.value);

		if (isValid && onChange) {
			onChange(event);
		}

		setValue(!Number.isNaN(changeValue) ? changeValue : "");
	};

	useEffect(() => {
		setValue(valueDefault);
	}, [valueDefault]);

	return (
		<Input
			varients={varients}
			value={value}
			onChange={onChangeHandler}
			type="text"
			inputMode="numeric"
			pattern="[0-9]+"
			{...restProps}
		/>
	);
};

export { NumberInput };
