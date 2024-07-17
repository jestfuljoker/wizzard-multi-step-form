import { Stepper } from '@/components/stepper';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

export function PersonalDataStep() {
	return (
		<div>
			<Stepper.Header title="Dados pessoais" description="Conte-nos mais sobre você" />

			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="firstName">Primeiro nome</Label>
					<Input id="firstName" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="lastName">Sobrenome</Label>
					<Input id="lastName" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="document">CPF</Label>
					<Input id="document" />
				</div>
			</div>

			<Stepper.Footer>
				<Stepper.PreviousButton />
				<Stepper.NextButton />
			</Stepper.Footer>
		</div>
	);
}
