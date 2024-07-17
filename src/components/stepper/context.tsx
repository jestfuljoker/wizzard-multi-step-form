import { createContext, useContext } from 'react';

export interface IStepperContextValue {
	previousStep: () => void;
	nextStep: () => void;
}

export const StepperContext = createContext<IStepperContextValue | null>(null);

export function useStepperContext() {
	const values = useContext(StepperContext);

	if (!values) {
		throw new Error('useStepperContext must be used within a StepperProvider');
	}

	return values;
}
