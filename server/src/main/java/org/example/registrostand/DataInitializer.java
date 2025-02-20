package org.example.registrostand;

import org.example.registrostand.email.EmailService;
import org.example.registrostand.entity.Estudiante;
import org.example.registrostand.repository.EstudianteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {
    private final EstudianteRepository estudianteRepository;
    private final EmailService emailService;

    @Override
    public void run(String... args) throws Exception {
        // Si no hay estudiantes en la base de datos, guardar uno de prueba
        if (estudianteRepository.count() == 0) {
            Estudiante estudianteTest = Estudiante.builder()
                    .id(null)
                    .nombre("Vladimir")
                    .apellido("Curiel")
                    .correo("vladimircuriel@outlook.com")
                    .carreraDeInteres("Ingeniería en Ciencias de la Computación")
                    .edad(20)
                    .provincia("San José")
                    .build();
            estudianteRepository.save(estudianteTest);
            log.info("Estudiante guardado en la base de datos.");

            emailService.enviarCorreoBienvenida(estudianteTest);
            log.info("Correo de bienvenida enviado.");
        } else {
            log.info("Ya hay estudiantes en la base de datos.");
        }
    }
}
