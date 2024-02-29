import styled from "styled-components";

interface Props {
	clicked: boolean;
}

export const Container = styled.div<Props>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: red;
	width: 100%;
	height: 40px;
	outline: none;
	border-radius: 5px;
	padding: 10px;
	margin: 2px;
	border: ;
	border: ${(props) =>
		props.clicked ? "1px solid #a8a8a8" : "1px solid #49b4bb"};
	&:hover {
		box-shadow: 0 0 10px rgba(73, 180, 187, 0.5);
	}
`;
export const Item = styled.p<Props>`
	user-select: none;
	color: ${(props) => (props.clicked ? "#a8a8a8" : "#49b4bb")};
	text-decoration: ${(props) => (props.clicked ? "line-through" : "none")};
	cursor: pointer;
	padding: 0.75rem 1rem;
	border-radius: 5px;
`;
export const Item2 = styled.p<Props>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #8758ff;
	color: #fff;
	padding: 0.75rem 1rem;
	border-radius: 5px;
	margin-bottom: 1rem;
`;
export const IconWrapper = styled.div`
	background: pink;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	gap: 5px;
	align-items: center;
`;
