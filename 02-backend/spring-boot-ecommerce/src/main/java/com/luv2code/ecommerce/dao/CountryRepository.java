package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * Project: spring-boot-ecommerce
 * Package: com.luv2code.ecommerce.dao
 * <p>
 * User: AnDrew
 * Date: 2/8/2025
 * Time: 3:53 PM
 */
@RepositoryRestResource(collectionResourceRel = "countries", path = "countries")
public interface CountryRepository extends JpaRepository<Country, Integer> {
}
