import { useStepperContext } from '@/components/stepper/context';
import { Button, ButtonProps } from '@/components/ui/button';

interface IStepperNextButtonProps extends ButtonProps {
	title?: string;
}

export function StepperNextButton({ title = 'Próximo', ...props }: IStepperNextButtonProps) {
	const { nextStep } = useStepperContext();

	return (
		<Button size="sm" type="button" onClick={nextStep} {...props}>
			{title}
		</Button>
	);
}
