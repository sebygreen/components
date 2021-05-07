import React from 'react';

const Modal = props => {
	if(!props.show) {
		return null
	}
	
	return(
		<div className='modal'>
			<div className='modal-content'>
				<div className='modal-header'>
					<h4 className='modal-title'>{props.title}</h4>
					<button className='button modal-close' onClick={props.onClose}>
						<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18">
							<path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
						</svg>
					</button>
				</div>
				<div className='modal-body'>
					{props.children}
				</div>
				<div className='modal-footer'>
					<button className='button modal-save' onClick={props.onOk}>
						Save
					</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;
