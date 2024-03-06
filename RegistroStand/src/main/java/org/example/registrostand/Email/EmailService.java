package org.example.openhouse2024.Email;

import org.example.openhouse2024.Entity.Estudiante;
import org.simplejavamail.api.email.Email;
import org.simplejavamail.api.mailer.Mailer;
import org.simplejavamail.email.EmailBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private Mailer mailer;

    // Correo de Bienvenida
    public void enviarCorreoBienvenida(Estudiante estudiante) {
        // Construir el contenido del correo
        String asunto = "¡Bienvenido a nuestro Open House 2024!";
        String cuerpo = String.format("Hola %s %s,\n\n"
                        + "¡Gracias por registrarte en nuestro Stand del CICC! "
                        + "Esperamos verte en el campus y que disfrutes de las actividades y oportunidades que tenemos preparadas.\n\n"
                        + "No dudes en contactarnos si tienes alguna pregunta.\n\n"
                        + "Saludos cordiales,\n"
                        + "El equipo del Comite en Ciencicas de Ciencias en la Computacion",
                estudiante.getNombre(), estudiante.getApellido());

        Email email = EmailBuilder.startingBlank()
                .from("cicc-csti@ce.pucmm.edu.do")
                .to(estudiante.getCorreo())
                .withSubject(asunto)
                .withPlainText(cuerpo)
                .buildEmail();

        // Enviar el email
        mailer.sendMail(email);
    }

}
