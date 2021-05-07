import React from 'react';

const Modal = props => {
	const loading = props.loading ? 'loading' : ''
	
	return(
		<button
			onClick={props.onClick}
			disabled={props.disabled}
			className={
				'button-component'
				+ ' ' +
				props.type
				+ ' ' +
				loading
			}>
			{props.children}
		</button>
	)
}

export default Modal;
