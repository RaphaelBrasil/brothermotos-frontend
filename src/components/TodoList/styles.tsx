import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: #ffffff;
	margin-top: 5rem;
	padding: 2rem;
	max-width: 400px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const ContainerInput = styled(Container)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 40px;
	outline: none;
	padding: 10px;
	margin: 2px;
	border: 1px solid #49b4bb;
	box-shadow: none;
	&:hover {
		box-shadow: 0 0 10px rgba(73, 180, 187, 0.5);
	}

	&:focus {
		border-color: #a8a8a8;
		outline: none;
	}
`;

export const ContainerItens = styled(Container)`
	outline: none;
	padding: 10px;
	box-shadow: none;
	box-sizing: border-box;
`;

export const NormalInput = styled.input`
	outline: none;
	background: none;
	color: #a8a8a8;
	border: 1px #49b4bb;
	width: 60vw;
	padding: 5px 5px;
	border: none;
`;
