import { Stepper } from '@/components/stepper';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function AccountStep() {
	return (
		<div>
			<Stepper.Header title="Conta" description="Seus dados de acesso à plataforma" />

			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="email">E-mail</Label>
					<Input id="email" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="password">Senha</Label>
					<Input id="password" type="password" />
				</div>
			</div>

			<Stepper.Footer>
				<Stepper.NextButton />
			</Stepper.Footer>
		</div>
	);
}
