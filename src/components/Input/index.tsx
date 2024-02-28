import React, { forwardRef, Ref } from "react";
import * as S from "./styles";

interface InputProps {
	type: "text" | "password";
	placeholder: string;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyForwardedInput = (
	{ type, placeholder, name, onChange }: InputProps,
	ref: Ref<HTMLInputElement>
) => {
	return type === "password" ? (
		<S.PasswordInput
			ref={ref}
			name={name}
			onChange={onChange}
			placeholder={placeholder}
		/>
	) : (
		<S.NormalInput
			ref={ref}
			name={name}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export const Input = forwardRef<HTMLInputElement, InputProps>(MyForwardedInput);

export default Input;
