import { StepperRoot } from '@/components/stepper/stepper';
import { StepperNextButton } from '@/components/stepper/stepper-next-button';
import { StepperPreviousButton } from '@/components/stepper/stepper-previous-button';

export const Stepper = {
	Root: StepperRoot,
	PreviousButton: StepperPreviousButton,
	NextButton: StepperNextButton,
};

export { useStepperContext } from '@/components/stepper/context';
