import { useStepperContext } from '@/components/stepper/context/hook';
import { Button, ButtonProps } from '@/components/ui/button';

interface IStepperPreviousButtonProps extends ButtonProps {}

export function StepperPreviousButton({
	size = 'sm',
	type = 'button',
	variant = 'secondary',
	onClick,
	...props
}: IStepperPreviousButtonProps) {
	const { previousStep } = useStepperContext();

	return (
		<Button size={size} variant={variant} type={type} onClick={onClick ?? previousStep} {...props}>
			Anterior
		</Button>
	);
}
