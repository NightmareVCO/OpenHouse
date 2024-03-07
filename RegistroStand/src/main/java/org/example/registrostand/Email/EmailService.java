//package org.example.registrostand.Email;
//
//import org.example.registrostand.Entity.Estudiante;
//import org.simplejavamail.api.email.Email;
//import org.simplejavamail.api.mailer.Mailer;
//import org.simplejavamail.email.EmailBuilder;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EmailService {
//
//    @Autowired
//    private Mailer mailer;
//
//    // Correo de Bienvenida
//    public void enviarCorreoBienvenida(Estudiante estudiante) {
//        // Construir el contenido del correo
//        String asunto = "¡Bienvenido a nuestro Open House 2024!";
//        String cuerpo = String.format("Hola %s %s,\n\n"
//                        + "¡Gracias por registrarte en nuestro Stand del CICC! "
//                        + "Esperamos verte en el campus y que disfrutes de las actividades y oportunidades que tenemos preparadas.\n\n"
//                        + "No dudes en contactarnos si tienes alguna pregunta.\n\n"
//                        + "Saludos cordiales,\n"
//                        + "El equipo del Comite en Ciencicas de Ciencias en la Computacion",
//                estudiante.getNombre(), estudiante.getApellido());
//
//        Email email = EmailBuilder.startingBlank()
//                .from("cicc-csti@ce.pucmm.edu.do")
//                .to(estudiante.getCorreo())
//                .withSubject(asunto)
//                .withPlainText(cuerpo)
//                .buildEmail();
//
//        // Enviar el email
//        mailer.sendMail(email);
//    }
//
//}
package org.example.registrostand.Email;

import org.example.registrostand.Entity.Estudiante;
import org.simplejavamail.api.email.Email;
import org.simplejavamail.api.mailer.Mailer;
import org.simplejavamail.email.EmailBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;


import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

@Service
public class EmailService {

    @Autowired
    private Mailer mailer;

    // Correo de Bienvenida
    public void enviarCorreoBienvenida(Estudiante estudiante) {
        // Cargar el contenido del archivo HTML
        String asunto = "¡Bienvenido a nuestro Open House 2024!";
        String cuerpo = cargarContenidoHTML("correo.html");

        String nombreCapitalizado = capitalizarPrimeraLetra(estudiante.getNombre());
        String apellidoCapitalizado = capitalizarPrimeraLetra(estudiante.getApellido());

        cuerpo = cuerpo.replace("{{nombre}}", nombreCapitalizado);
        cuerpo = cuerpo.replace("{{apellido}}", apellidoCapitalizado);
        cuerpo = cuerpo.replace("{{carrera}}", estudiante.getCarreraDeInteres());

        // Construir el email con el contenido HTML
        Email email = EmailBuilder.startingBlank()
                .from("cicc-csti@ce.pucmm.edu.do")
                .to(estudiante.getCorreo())
                .withSubject(asunto)
                .withHTMLText(cuerpo)
                .buildEmail();

        // Enviar el email
        mailer.sendMail(email);
    }

    // Método para cargar el contenido de un archivo HTML
    private String cargarContenidoHTML(String nombreArchivo) {
        try {
            ClassPathResource resource = new ClassPathResource(nombreArchivo);
            byte[] bytes = new byte[(int) resource.contentLength()];
            InputStream inputStream = resource.getInputStream();
            int bytesRead = inputStream.read(bytes);
            inputStream.close();
            return new String(bytes, StandardCharsets.UTF_8);
        } catch (IOException e) {
            e.printStackTrace();
            return ""; // Manejar el error apropiadamente en tu aplicación
        }
    }

    public String capitalizarPrimeraLetra(String palabra) {
        if (palabra == null || palabra.isEmpty()) {
            return palabra;
        }
        return palabra.substring(0, 1).toUpperCase() + palabra.substring(1);
    }

}
