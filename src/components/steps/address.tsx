import { Stepper } from '@/components/stepper';

export function AddressStep() {
	return (
		<div>
			Address
			<Stepper.PreviousButton />
			<Stepper.NextButton title="Finalizar" type="submit" />
		</div>
	);
}
