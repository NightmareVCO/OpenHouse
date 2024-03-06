package org.example.registrostand.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Estudiante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellido;
    private String correo;
    private String carreraDeInteres;
    private int edad;
    private String provincia;

    // Constructor que recibe todos los parámetros excepto el id
    public Estudiante(String nombre, String apellido, String correo, String carreraDeInteres, int edad, String provincia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.carreraDeInteres = carreraDeInteres;
        this.edad = edad;
        this.provincia = provincia;
    }

    // Constructor sin argumentos para JPA
    public Estudiante() {
        // Constructor sin argumentos necesario para JPA
    }

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getCarreraDeInteres() {
        return carreraDeInteres;
    }

    public void setCarreraDeInteres(String carreraDeInteres) {
        this.carreraDeInteres = carreraDeInteres;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }
}
