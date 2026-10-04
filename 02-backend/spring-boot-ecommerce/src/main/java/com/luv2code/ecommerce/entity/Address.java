package com.luv2code.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Project: spring-boot-ecommerce
 * Package: com.luv2code.ecommerce.entity
 * <p>
 * User: AnDrew
 * Date: 2/9/2025
 * Time: 2:39 PM
 */
@Entity
@Table(name = "address")
@Getter
@Setter
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "street")
    private String street;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "country")
    private String country;

    @Column(name = "zip_code")
    private String zipCode;

    @OneToOne
    @PrimaryKeyJoinColumn
    private Order order;
}
