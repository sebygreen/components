import React, { useState } from 'react';
import Modal from './components/Modal';
import Button from './components/Button';
import './App.css';

function App() {
	const [show, setShow] = useState(false);
	
	return (
		<div className='app-container'>
			
			<div className='flex-container'>
				<div className='flex-item' style={{marginRight:'10px'}}>
					<Button type='primary' onClick={() => setShow(true)}>
						<p>Demo modal</p>
					</Button>
					<Modal title='A nice modal title' onClose={() => setShow(false)} onOk={() => setShow(false)} show={show}>
						<p>Some nice modal content</p>
					</Modal>
				</div>
				<div className='flex-item'>
					<div className='flex-item-vertical' style={{marginRight:'10px'}}>
						<Button type='primary'><p>Primary</p></Button>
						<Button type='success'><p>Success</p></Button>
						<Button type='warning'><p>Warning</p></Button>
						<Button type='danger'><p>Danger</p></Button>
					</div>
					<div className='flex-item-vertical'>
						<Button type='primary' disabled={true}><p>Disabled</p></Button>
						<Button type='primary' loading={true}><p>Loading</p></Button>
					</div>
				</div>	
			</div>
		</div>
		
	);
}

export default App;
