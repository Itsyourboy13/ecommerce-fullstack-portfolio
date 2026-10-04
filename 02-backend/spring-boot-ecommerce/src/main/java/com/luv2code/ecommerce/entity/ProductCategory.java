package com.luv2code.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

/**
 * Project: spring-boot-ecommerce
 * Package: com.luv2code.ecommerce.entity
 * <p>
 * User: AnDrew
 * Date: 2/5/2025
 * Time: 10:26 PM
 */
@Entity
@Table(name = "product_category")
@Getter
@Setter
public class ProductCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "category_name")
    private String categoryName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private Set<Product> products;
}
