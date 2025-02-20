'use server';

const API_URL = 'http://localhost:8080/api/v1/estudiantes';

export async function sendEmail(prevState: unknown, formData: FormData) {

  console.log('formData', formData);

	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			body: formData,
		});
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
