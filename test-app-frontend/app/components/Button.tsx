'use client';
import { FC, ReactNode } from 'react';

type Props = {
	message: string;
	children: ReactNode;
	onClick: (message: string) => void;
	type: 'button' | 'submit' | 'reset'; 
};
export const Button: FC<Props> = ({ message, children, onClick, type= 'button' }) => {
	return (
		<button type={type} onClick={() => onClick(message)} title={message}>
			{children} 
		</button>
	);
};