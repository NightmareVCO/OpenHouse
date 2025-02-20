package org.example.registrostand.controlller;

import org.example.registrostand.email.EmailService;
import org.example.registrostand.entity.Estudiante;
import org.example.registrostand.repository.EstudianteRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/estudiantes")
@RequiredArgsConstructor
public class EstudianteController {
    private final EstudianteRepository estudianteRepository;
    private final EmailService emailService;

    @PostMapping
    public void agregarEstudiante(@RequestBody Estudiante estudiante) {
        Estudiante estudianteGuardado = estudianteRepository.save(estudiante);

        emailService.enviarCorreoBienvenida(estudianteGuardado);
    }
}
