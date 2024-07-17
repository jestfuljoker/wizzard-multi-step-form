import { Stepper } from '@/components/stepper';
import { AccountStep, AddressStep, PersonalDataStep } from '@/components/steps';

export function App() {
	return (
		<div className="min-h-screen flex justify-center pt-40">
			<Stepper.Root
				steps={[
					{
						label: 'Conta',
						content: <AccountStep />,
					},
					{
						label: 'Dados pessoais',
						content: <PersonalDataStep />,
					},
					{
						label: 'Endereço',
						content: <AddressStep />,
					},
				]}
			/>
		</div>
	);
}
