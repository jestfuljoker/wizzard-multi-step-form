import { Stepper } from '@/components/stepper';

export function AddressStep() {
	return (
		<div>
			<Stepper.Header title="Endereço" description="De onde você é?" />

			<Stepper.Footer>
				<Stepper.PreviousButton />
				<Stepper.NextButton title="Finalizar" type="submit" />
			</Stepper.Footer>
		</div>
	);
}
