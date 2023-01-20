package com.vivero.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "producto")
public class Producto {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//para que sea ID autoincrementable
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "precio")
    private Float precio;


    public Producto() {
    }

    public Producto(Long id, String nombre, Float precio) {

        this.nombre = nombre;
        this.precio = precio;

    }

    public Producto(String nombre, float precio) {
    }

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

    public Float getPrecio() {
        return precio;
    }

    public void setPrecio(Float precio) {
        this.precio = precio;
    }


}
