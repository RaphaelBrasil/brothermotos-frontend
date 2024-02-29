import styled from "styled-components";

export const NormalInput = styled.input`
	padding: 5px 5px;
	height: 35px;
	width: 330px;
	background-color: #ffffff;
	border: 1px solid #49b4bb;
	color: #a8a8a8;

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
