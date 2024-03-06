package org.example.openhouse2024;

import org.example.openhouse2024.Entity.Estudiante;
import org.example.openhouse2024.Email.EmailService;
import org.example.openhouse2024.Repository.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private EstudianteRepository estudianteRepository;

    @Autowired
    private EmailService emailService;

    @Override
    public void run(String... args) throws Exception {
        // Verificar si ya hay estudiantes en la base de datos
        if (estudianteRepository.count() == 0) {
            Estudiante estudiante1 = new Estudiante("ivan", "marcelino", "scout1518@gmail.com", "Ingeniería Informática", 21, "Santo Domingo");
            estudianteRepository.save(estudiante1);
            System.out.println("Estudiante creado con éxito.");

            emailService.enviarCorreoBienvenida(estudiante1);
            System.out.println("Correo de bienvenida enviado correctamente.");
        } else {
            System.out.println("Ya existen estudiantes en la base de datos.");
        }
    }
}
