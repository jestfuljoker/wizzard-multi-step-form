import { StepperRoot } from '@/components/stepper/root';
import { StepperNextButton } from '@/components/stepper/next-button';
import { StepperPreviousButton } from '@/components/stepper/previous-button';
import { StepperHeader } from '@/components/stepper/header';
import { StepperFooter } from '@/components/stepper/footer';

export const Stepper = {
	Root: StepperRoot,
	Header: StepperHeader,
	PreviousButton: StepperPreviousButton,
	NextButton: StepperNextButton,
	Footer: StepperFooter,
};

export { useStepperContext } from '@/components/stepper/context';
