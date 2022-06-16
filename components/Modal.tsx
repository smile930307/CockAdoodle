import React from "react"

interface ModalProps {
	header?:        any
	children:       any
	footer?:		any
	isOpened?:		boolean
	onClose?:		any
	width?:			string
}

const Modal = ({
	header,
	children,
	footer,
	isOpened,
	onClose,
	width
}:ModalProps) => {
	console.log(isOpened)
	const onCloseHandle = () => {
		onClose()
	}

	if(!isOpened){
		return null;
	}

	return (
		<div className={`modal${isOpened?"":" hide"}`}>
			<div className="modal-container" style={{maxWidth: width}}>
				<div className="modal-header">
					{header ? header : (
						<div className="close-panel" onClick={onCloseHandle}>
							<img src="/images/logo.svg" alt="Logo" />
							<span className="close"></span>
						</div>)
					}
				</div>
				<div className="modal-content">
					{children}
				</div>
				<div className="modal-footer">
				</div>
			</div>
		</div>
	)
}

export default Modal;