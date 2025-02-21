'use server';

const API_URL = 'http://server:8080/api/v1/estudiantes';

export async function sendEmail(prevState: unknown, formData: FormData) {
	try {
		const formDto = Object.fromEntries(formData.entries());
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formDto),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		return {
			errors: {
				error: 'Error al enviar el correo',
			},
		};
	}
}
