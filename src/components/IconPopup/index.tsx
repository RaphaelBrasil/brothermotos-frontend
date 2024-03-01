// IconPopup.js

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";

type IconPopupProps = {
	icon: any;
	popupText: string;
	size: any;
	style: any;
	onClick: any;
};

const IconPopup: React.FC<IconPopupProps> = ({
	icon,
	popupText,
	size,
	style,
	onClick
}) => {
	const [isPopupVisible, setPopupVisible] = useState(false);

	return (
		<S.IconContainer
			onMouseOver={() => setPopupVisible(true)}
			onMouseOut={() => setPopupVisible(false)}
		>
			<FontAwesomeIcon
				icon={icon}
				size={size}
				style={style}
				onClick={onClick}
			/>

			<S.Popup $isVisible={isPopupVisible}>{popupText}</S.Popup>
		</S.IconContainer>
	);
};

export default IconPopup;
