import styled from "styled-components";

export const NormalInput = styled.input`
	padding: 5px 5px;
	height: 35px;
	width: 330px;
	border-radius: 4px;
	background-color: #ffffff;
	border: 1px #ffffff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}
`;

export const PasswordInput = styled(NormalInput).attrs((props) => ({
	type: "password"
}))``;
