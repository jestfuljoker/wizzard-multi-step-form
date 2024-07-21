import { Stepper } from '@/components/stepper';
import { AccountStep, AddressStep, PersonalDataStep } from '@/components/steps';
import { accountStepSchema } from '@/components/steps/account/schema';
import { addressStepSchema } from '@/components/steps/address/schema';
import { personalDataStepSchema } from '@/components/steps/personal-data/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
	accountStep: accountStepSchema,
	addressStep: addressStepSchema,
	personalDataStep: personalDataStepSchema,
});

export type FormData = z.infer<typeof schema>;

export function App() {
	const form = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			accountStep: {
				email: '',
				password: '',
			},
			personalDataStep: {
				firstName: '',
				lastName: '',
				document: '',
			},
			addressStep: {
				state: '',
				city: '',
				street: '',
			},
		},
	});

	const handleSubmit = form.handleSubmit(async (formData) => {
		console.log('Sending to API: ', formData);
		await new Promise((resolve) => setTimeout(resolve, 2000));
	});

	return (
		<div className="min-h-screen flex justify-center pt-40">
			<FormProvider {...form}>
				<form onSubmit={handleSubmit}>
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
				</form>
			</FormProvider>
		</div>
	);
}
