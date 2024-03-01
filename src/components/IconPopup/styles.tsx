import styled from "styled-components";

export const Popup = styled.div<{ $isVisible: boolean }>`
	z-index: 999;
	font-size: 10px;
	display: ${(props) => (props.$isVisible ? "block" : "none")};
	position: absolute;
	background-color: rgba(168, 168, 168, 0.9); /* Cor cinza transparente */
	color: #fff;
	padding: 5px;
	border-radius: 5px;
	white-space: nowrap;
	user-select: none;
	top: 100%;
	left: 50%;
`;
export const IconContainer = styled.div`
	position: relative;
	cursor: pointer;
	transition: transform 0.3s ease;
	&:hover {
		transform: scale(1.1);
	}
`;

export const Icon = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
