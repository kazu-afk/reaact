'use client';
import { FC, ReactNode } from 'react';

type Props = {
	message: string;
	children: ReactNode;
	onClick: (message: string) => void;
};
export const Button: FC<Props> = ({ message, children, onClick }) => {
	return (
		<button onClick={() => onClick(message)}>
			{children} "{message}"
		</button>
	);
};