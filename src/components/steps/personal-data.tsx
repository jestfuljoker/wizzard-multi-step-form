import { Stepper } from '@/components/stepper';

export function PersonalDataStep() {
	return (
		<div>
			<Stepper.Header title="Dados pessoais" description="Conte-nos mais sobre você" />

			<Stepper.Footer>
				<Stepper.PreviousButton />
				<Stepper.NextButton />
			</Stepper.Footer>
		</div>
	);
}
