import {
	addToast,
	Autocomplete,
	AutocompleteItem,
	Button,
	Form,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	NumberInput,
	useDisclosure,
} from '@heroui/react';
import { sendEmail } from '@lib/action/email.action';
import { provinces } from '@lib/data/provinces.data';
import { useActionState, useState, useTransition } from 'react';
interface FormModalProps {
	readonly buttonText: string;
	readonly degree: string;
	readonly setShouldConffeti: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormModal({
	buttonText,
	degree,
	setShouldConffeti,
}: FormModalProps) {
	const [edad, setEdad] = useState(0);

	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const [_, startTransition] = useTransition();

	const [{ errors }, formAction, pending] = useActionState(sendEmail, {
		errors: {},
	});

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		startTransition(async () => {
			const formData = new FormData(e.currentTarget);
			formAction(formData);

			if (!errors?.error) {
				setShouldConffeti(true);
				onOpenChange();
				addToast({
					title: 'Correo enviado',
					description: 'El correo ha sido enviado con éxito',
					color: 'primary',
				});
				setTimeout(() => setShouldConffeti(false), 3000);
			}
		});

	};

	return (
		<>
			<Button
				color="primary"
				onPress={onOpen}
				radius="full"
				variant="shadow"
				fullWidth
			>
				<span className="text-lg">{buttonText}</span>
			</Button>
			<Modal
				backdrop="blur"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				isDismissable={false}
				isKeyboardDismissDisabled={false}
				size="2xl"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								<h2 className="text-2xl font-semibold text-center text-primary">
									Formulario de Registro
								</h2>
								<p className="text-lg font-medium text-center text-default-400">
									Regístrate para obtener más información
								</p>
							</ModalHeader>
							<ModalBody>
								<Form id="form" onSubmit={onSubmit} validationErrors={errors}>
									<Input
										label="Nombre"
										name="nombre"
										labelPlacement="outside"
										placeholder="Ej. Vladimir"
										isRequired
										isClearable
										size="lg"
										type="text"
									/>
									<Input
										label="Apellido"
										name="apellido"
										labelPlacement="outside"
										placeholder="Ej. Curiel"
										isRequired
										isClearable
										size="lg"
										type="text"
									/>
									<Input
										label="Correo"
										name="correo"
										labelPlacement="outside"
										placeholder="Ej.vladimircuriel@email.com"
										isRequired
										isClearable
										size="lg"
										type="email"
									/>
									<NumberInput
										label="Edad"
										labelPlacement="outside"
										placeholder="Ej. 20"
										minValue={0}
										maxValue={100}
										size="lg"
										isRequired
										isClearable
										onValueChange={(value) => setEdad(value)}
									/>
									<input type="hidden" name="edad" value={edad} />
									<input type="hidden" name="carreraDeInteres" value={degree} />
									<Autocomplete
										label="Provincia"
										isRequired
										isClearable
										name="provincia"
										labelPlacement="outside"
										size="lg"
										placeholder="Buscar una provincia"
									>
										{provinces.map((province) => (
											<AutocompleteItem key={province.key}>
												{province.label}
											</AutocompleteItem>
										))}
									</Autocomplete>
								</Form>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									radius="full"
									variant="light"
									onPress={onClose}
								>
									Cerrar
								</Button>
								<Button
									form="form"
									type="submit"
									color="primary"
									radius="full"
									variant="shadow"
									isLoading={pending}
									isDisabled={pending}
								>
									{buttonText}
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
