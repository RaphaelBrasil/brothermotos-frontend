import styled from "styled-components";

interface Props {
	$completed: boolean;
}

export const Container = styled.div<Props>`
	display: flex;
	align-items: center;
	gap: 1px;
	width: 100%;
	height: 40px;
	outline: none;
	padding: 10px;
	margin: 2px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	&:hover {
		box-shadow: ${(props) =>
			props.$completed
				? "0 0 10px rgba(168, 168, 168, 0.5)"
				: "0 0 10px rgba(73, 180, 187, 0.5)"};

		transform: scale(1.1);
	}
`;
export const Item = styled.p<Props>`
	user-select: none;
	color: ${(props) => (props.$completed ? "#a8a8a8" : "#49b4bb")};
	text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
	cursor: pointer;
	border: none;
	padding: 0.75rem 1rem;
	width: 100%;
`;

export const NormalInput = styled.input`
	user-select: none;
	color: #772f1a;
	text-decoration: none;
	cursor: edit;
	padding: 0.75rem 1rem;
	width: 100%;
	background: none;
	border: none;
	&:focus {
		outline: none;
	}
`;

export const IconWrapper = styled.div`
	z-index: 1;
	background: none;
	width: 5rem;
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 5px;
`;
