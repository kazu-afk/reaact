import { FC, ReactNode } from 'react';

type Props = {
	message: string;
	children: ReactNode;
};
export const Button: FC<Props> = ({ message, children }) => {
	return <button onClick={() => alert(message)}>{children}</button>;
};