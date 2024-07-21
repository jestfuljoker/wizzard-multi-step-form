import { StepperContext } from '@/components/stepper/context';
import { useContext } from 'react';

export function useStepperContext() {
	const values = useContext(StepperContext);

	if (!values) {
		throw new Error('useStepperContext must be used within a StepperProvider');
	}

	return values;
}
