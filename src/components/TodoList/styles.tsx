import styled from "styled-components";

export const Container2 = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	padding: 10px;
`;
export const Container = styled.div`
	display: flex;
	align-items: space-between;
	flex-direction: column;
	background: #ffffff;

	margin-top: 5rem;
	padding: 2rem;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const ContainerInput = styled(Container)`
	display: flex;
	background: green;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 40px;
	outline: none;
	border-radius: 5px;
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
	background: yellow;
	box-shadow: none;
`;

export const NormalInput = styled.input`
	outline: none;
	background: none;
	color: #a8a8a8;
	border: 1px #49b4bb;
	width: 60vw;
	padding: 5px 5px;

	&:focus {
		border: 1px #49b4bb;
		border-color: #a8a8a8;
		outline: none;
	}
`;
