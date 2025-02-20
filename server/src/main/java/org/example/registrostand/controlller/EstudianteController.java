package org.example.registrostand.controlller;

import org.example.registrostand.email.EmailService;
import org.example.registrostand.entity.Estudiante;
import org.example.registrostand.repository.EstudianteRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/estudiantes")
@RequiredArgsConstructor
@Slf4j
public class EstudianteController {
    private final EstudianteRepository estudianteRepository;
    private final EmailService emailService;

    @PostMapping
    public ResponseEntity<Estudiante> agregarEstudiante(@RequestBody Estudiante estudiante) {
        Estudiante estudianteGuardado = estudianteRepository.save(estudiante);

        emailService.enviarCorreoBienvenida(estudianteGuardado);

        return ResponseEntity.ok(estudianteGuardado);
    }
}
