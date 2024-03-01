import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: #ffffff;
	margin-top: 5rem;
	padding: 1rem;
	max-width: 400px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const ContainerInput = styled(Container)`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 40px;
	outline: none;
	margin: 2px;
	border: 1px solid #095256;
	box-shadow: none;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
	&:hover {
		box-shadow: 0px 5px 15px rgba(9, 82, 86, 0.5);
	}

	&:focus {
		border-color: #a8a8a8;
		outline: none;
	}
	border: none;
`;

export const ContainerItens = styled(Container)`
	outline: none;
	padding: 10px;
	box-shadow: none;
`;

export const NormalInput = styled.input`
	outline: none;
	background: none;
	color: #095256;
	width: 60vw;
	padding: 5px 5px;
	border: none;
`;
export const IconWrapper = styled.div`
	background: none;
	width: 5rem;
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 5px;
`;
