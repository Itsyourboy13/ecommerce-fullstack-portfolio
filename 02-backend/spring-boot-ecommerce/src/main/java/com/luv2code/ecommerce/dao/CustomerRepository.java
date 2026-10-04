package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Project: spring-boot-ecommerce
 * Package: com.luv2code.ecommerce.dao
 * <p>
 * User: AnDrew
 * Date: 2/9/2025
 * Time: 5:52 PM
 */
@RepositoryRestResource(collectionResourceRel = "customer", path = "customer")
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findByEmail(String theEmail);
}
