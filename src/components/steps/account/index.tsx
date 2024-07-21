import { FormData } from '@/App';
import { Stepper, useStepperContext } from '@/components/stepper';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormContext } from 'react-hook-form';

export function AccountStep() {
	const form = useFormContext<FormData>();
	const { nextStep } = useStepperContext();

	async function handleNextStep() {
		const isFormValid = await form.trigger('accountStep');

		if (isFormValid) {
			nextStep();
		}
	}

	return (
		<div>
			<Stepper.Header title="Conta" description="Seus dados de acesso à plataforma" />

			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="email">E-mail</Label>
					<Input id="email" {...form.register('accountStep.email')} />
					{form.formState.errors.accountStep?.email?.message && (
						<small className="text-destructive">
							{form.formState.errors.accountStep.email.message}
						</small>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="password">Senha</Label>
					<Input id="password" type="password" {...form.register('accountStep.password')} />
					{form.formState.errors.accountStep?.password?.message && (
						<small className="text-destructive">
							{form.formState.errors.accountStep.password.message}
						</small>
					)}
				</div>
			</div>

			<Stepper.Footer>
				<Stepper.NextButton onClick={handleNextStep} />
			</Stepper.Footer>
		</div>
	);
}
