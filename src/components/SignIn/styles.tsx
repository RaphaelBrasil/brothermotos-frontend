import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 95vh;
`;

export const FormContainer = styled.form`
	gap: 15px;
	display: flex;
	background-color: green;
	align-items: center;
	align-content: center;
	justify-content: space-between;
	flex-direction: column;
	width: 350px;
	height: 300px;

	border-radius: 5px;
	& > * {
		margin: 5px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: space-between;
	width: 100%;
	outline: none;
	& > * {
		margin: 5px;
	}
`;
export const Label = styled.label`
	font-size: 13px;
	color: #a8a8a8;
`;

export const LabelError = styled(Label)`
	color: red;
`;
