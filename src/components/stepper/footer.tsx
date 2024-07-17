import { ReactNode } from 'react';

interface IStepperFooterProps {
	children: ReactNode;
}

export function StepperFooter({ children }: IStepperFooterProps) {
	return <footer className="mt-6 flex justify-end gap-2">{children}</footer>;
}
