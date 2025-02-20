package org.example.registrostand.controlller;

import org.example.registrostand.Email.EmailService;
import org.example.registrostand.Entity.Estudiante;
import org.example.registrostand.Repository.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EstudianteController {

    @Autowired
    private EstudianteRepository estudianteRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/estudiantes")
    public void agregarEstudiante(@RequestBody Estudiante estudiante) {
        Estudiante estudianteGuardado = estudianteRepository.save(estudiante);

        emailService.enviarCorreoBienvenida(estudianteGuardado);
    }
}
