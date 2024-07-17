import { StepperNextButton } from '@/components/stepper/stepper-next-button';
import { StepperPreviousButton } from '@/components/stepper/stepper-previous-button';

export function PersonalDataStep() {
	return (
		<div>
			PersonalData
			<StepperPreviousButton />
			<StepperNextButton />
		</div>
	);
}
