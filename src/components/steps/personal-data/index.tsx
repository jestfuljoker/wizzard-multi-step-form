import { FormData } from '@/App';
import { Stepper, useStepperContext } from '@/components/stepper';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { useFormContext } from 'react-hook-form';

export function PersonalDataStep() {
	const form = useFormContext<FormData>();
	const { nextStep } = useStepperContext();

	async function handleNextStep() {
		const isFormValid = await form.trigger('personalDataStep');

		if (isFormValid) {
			nextStep();
		}
	}

	return (
		<div>
			<Stepper.Header title="Dados pessoais" description="Conte-nos mais sobre você" />

			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="firstName">Primeiro nome</Label>
					<Input id="firstName" {...form.register('personalDataStep.firstName')} />
					{form.formState.errors.personalDataStep?.firstName?.message && (
						<small className="text-destructive">
							{form.formState.errors.personalDataStep.firstName.message}
						</small>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="lastName">Sobrenome</Label>
					<Input id="lastName" {...form.register('personalDataStep.lastName')} />
					{form.formState.errors.personalDataStep?.lastName?.message && (
						<small className="text-destructive">
							{form.formState.errors.personalDataStep.lastName.message}
						</small>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="document">CPF</Label>
					<Input id="document" {...form.register('personalDataStep.document')} />
					{form.formState.errors.personalDataStep?.document?.message && (
						<small className="text-destructive">
							{form.formState.errors.personalDataStep.document.message}
						</small>
					)}
				</div>
			</div>

			<Stepper.Footer>
				<Stepper.PreviousButton />
				<Stepper.NextButton onClick={handleNextStep} />
			</Stepper.Footer>
		</div>
	);
}
