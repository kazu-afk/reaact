'use client'; 
import { Button } from './components/Button';

export default function App() {
	return (
		<div
			onClick={() => {
				alert('The parent is called');
			}}
			onClickCapture={() => {
				alert('Capture event is triggered');
			}}
		>
		<button
			onClick={(event) => {
				event.stopPropagation();
				alert('The child is called');
			}}
		>
			Button
		</button>
		</div>
	);
}