package org.example.registrostand.email;

import org.example.registrostand.entity.Estudiante;
import org.simplejavamail.api.email.Email;
import org.simplejavamail.api.mailer.Mailer;
import org.simplejavamail.email.EmailBuilder;
import org.springframework.core.io.ClassPathResource;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final Mailer mailer;

    // Correo de Bienvenida
    @Async
    public void enviarCorreoBienvenida(Estudiante estudiante) {
        // Cargar el contenido del archivo HTML
        String asunto = "¡Bienvenido a nuestro Open House 2025!";
        String cuerpo = cargarContenidoHTML("correo.html");

        String nombreCapitalizado = capitalizarPrimeraLetra(estudiante.getNombre());
        String apellidoCapitalizado = capitalizarPrimeraLetra(estudiante.getApellido());

        cuerpo = cuerpo.replace("{{nombre}}", nombreCapitalizado);
        cuerpo = cuerpo.replace("{{apellido}}", apellidoCapitalizado);
        cuerpo = cuerpo.replace("{{carrera}}", estudiante.getCarreraDeInteres());

        // Construir el email con el contenido HTML
        Email email = EmailBuilder.startingBlank()
                .from("OpenHouse2025@systechs.live")
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
            return "";
        }
    }

    public String capitalizarPrimeraLetra(String palabra) {
        if (palabra == null || palabra.isEmpty()) {
            return palabra;
        }
        return palabra.substring(0, 1).toUpperCase() + palabra.substring(1);
    }

}
