import styled from "styled-components";

const commonSpacing = "5px";
const labelColor = "#a8a8a8";
const errorColor = "#592941";

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	padding: 20vh;
`;

export const FormContainer = styled.form`
	gap: ${commonSpacing};
	background: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 50%;
	min-width: 350px;
	max-width: 400px;
	padding: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	& > * {
		margin: ${commonSpacing};
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
	width: 95%;
	outline: none;
`;

export const Label = styled.label`
	font-size: 15px;
	color: ${labelColor};
`;

export const LabelError = styled(Label)`
	color: ${errorColor};
	transition: margin-top 0.3s ease;
	margin-top: 10px;
`;
