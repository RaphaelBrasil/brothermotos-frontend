import styled from "styled-components";

export const NormalInput = styled.input`
	padding: 5px 5px;
	height: 35px;
	width: 330px;
	background-color: #ffffff;
	border: none;
	color: #a8a8a8;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	&:hover {
		box-shadow: 0 0 10px rgba(73, 180, 187, 0.5);
	}

	&:focus {
		border-color: #a8a8a8;
		outline: none;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}
`;

export const PasswordInput = styled(NormalInput).attrs((props) => ({
	type: "password"
}))``;
