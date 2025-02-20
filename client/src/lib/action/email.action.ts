'use server';

const API_URL = 'http://server:8080/api/v1/estudiantes';

export async function sendEmail(prevState: unknown, formData: FormData) {
	const formObject = Object.fromEntries(formData.entries());

	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formObject),
		});

		console.log(response);

		if (!response.ok) {
			return {
				errors: {
					email: 'Error al enviar el correo',
					message: 'Error al enviar el correo',
				},
			};
		}

		const data = await response.json();
		return data;
	} catch (error) {
		return {
			errors: {
				email: 'Error al enviar el correo',
				message: 'Error al enviar el correo',
			},
		};
	}
}
