'use server';

import { console } from "inspector";

const API_URL = 'http://server:8080/api/v1/estudiantes';

export async function sendEmail(prevState: unknown, formData: FormData) {
	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify(formData),
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
