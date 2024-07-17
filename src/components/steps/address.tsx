import { Stepper } from '@/components/stepper';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function AddressStep() {
	return (
		<div>
			<Stepper.Header title="Endereço" description="De onde você é?" />

			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="state">Estado</Label>
					<Input id="state" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="city">Cidade</Label>
					<Input id="city" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="street">Endereço</Label>
					<Input id="street" />
				</div>
			</div>

			<Stepper.Footer>
				<Stepper.PreviousButton />
				<Stepper.NextButton title="Finalizar" type="submit" />
			</Stepper.Footer>
		</div>
	);
}
