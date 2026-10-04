package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

/**
 * Project: spring-boot-ecommerce
 * Package: com.luv2code.ecommerce.dao
 * <p>
 * User: AnDrew
 * Date: 2/8/2025
 * Time: 4:05 PM
 */
@RepositoryRestResource
public interface StateRepository extends JpaRepository<State, Integer> {

    List<State> findByCountryCode(@Param("code") String code);
}
