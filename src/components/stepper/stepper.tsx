import { StepperContext } from '@/components/stepper/context';
import { cn } from '@/lib/utils';
import { ReactNode, useCallback, useState } from 'react';

interface IStepperProps {
	initialStep?: number;
	steps: {
		label: string;
		content: ReactNode;
	}[];
}

export function StepperRoot({ steps, initialStep = 0 }: IStepperProps) {
	const [currentStep, setCurrentStep] = useState(initialStep);

	const previousStep = useCallback(() => {
		setCurrentStep((prevState) => Math.max(0, prevState - 1));
	}, []);

	const nextStep = useCallback(() => {
		setCurrentStep((prevState) => Math.min(steps.length - 1, prevState + 1));
	}, [steps]);

	return (
		<StepperContext.Provider value={{ previousStep, nextStep }}>
			<ul className="space-x-6">
				{steps.map((step, index) => (
					<li
						key={step.label}
						className={cn(
							'inline-block text-xs px-2 py-1 rounded-md',
							index === currentStep && 'bg-primary text-primary-foreground',
						)}
					>
						{String(index + 1).padStart(2, '0')}. {step.label}
					</li>
				))}
			</ul>

			<div className="mt-10">{steps[currentStep].content}</div>
		</StepperContext.Provider>
	);
}
