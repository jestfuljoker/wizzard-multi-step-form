import { useStepperContext } from '@/components/stepper/context';
import { Button, ButtonProps } from '@/components/ui/button';

interface IStepperPreviousButtonProps extends ButtonProps {}

export function StepperPreviousButton(props: IStepperPreviousButtonProps) {
	const { previousStep } = useStepperContext();

	return (
		<Button size="sm" variant="secondary" type="button" onClick={previousStep} {...props}>
			Anterior
		</Button>
	);
}
