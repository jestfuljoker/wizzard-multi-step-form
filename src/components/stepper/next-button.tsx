import { useStepperContext } from '@/components/stepper/context/hook';
import { Button, ButtonProps } from '@/components/ui/button';

interface IStepperNextButtonProps extends ButtonProps {
	title?: string;
}

export function StepperNextButton({
	title = 'Próximo',
	size = 'sm',
	type = 'button',
	onClick,
	...props
}: IStepperNextButtonProps) {
	const { nextStep } = useStepperContext();

	return (
		<Button size={size} type={type} onClick={onClick ?? nextStep} {...props}>
			{title}
		</Button>
	);
}
