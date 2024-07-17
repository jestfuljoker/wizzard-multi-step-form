import { Stepper } from '@/components/stepper';

export function AccountStep() {
	return (
		<div>
			<Stepper.Header title="Conta" description="Seus dados de acesso à plataforma" />

			<Stepper.Footer>
				<Stepper.NextButton />
			</Stepper.Footer>
		</div>
	);
}
