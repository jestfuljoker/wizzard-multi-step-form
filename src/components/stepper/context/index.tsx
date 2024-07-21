import { createContext } from 'react';

export interface IStepperContextValue {
	previousStep: () => void;
	nextStep: () => void;
}

export const StepperContext = createContext<IStepperContextValue | null>(null);
