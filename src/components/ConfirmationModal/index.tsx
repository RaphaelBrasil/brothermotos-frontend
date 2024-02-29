import React from "react";
import Button from "../Button";

const ConfirmationModal: React.FC<{
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
}> = ({ isOpen, onClose, onConfirm }) => {
	if (!isOpen) return null;

	return (
		<div className="confirmation-modal">
			<div className="modal-content">
				<p>Tem certeza que quer exluir essa tarefa?</p>
				<Button
					onClick={onConfirm}
					text="Sim, apagar"
					type="button"
					theme="secondary"
				/>
				<Button
					onClick={onClose}
					text="Cancelar"
					type="button"
					theme="secondary"
				/>
			</div>
		</div>
	);
};

export default ConfirmationModal;
