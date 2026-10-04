package com.luv2code.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;

/**
 * Project: spring-boot-ecommerce
 * Package: com.luv2code.ecommerce.entity
 * <p>
 * User: AnDrew
 * Date: 2/8/2025
 * Time: 3:50 PM
 */
@Entity
@Table(name = "state")
@Data
public class State {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;
}
