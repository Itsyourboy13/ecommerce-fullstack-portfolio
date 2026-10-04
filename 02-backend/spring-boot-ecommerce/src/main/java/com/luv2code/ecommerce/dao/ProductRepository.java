package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


/**
 * Project: spring-boot-ecommerce
 * Package: com.luv2code.ecommerce.dao
 * <p>
 * User: AnDrew
 * Date: 2/6/2025
 * Time: 9:09 AM
 */
@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, Long> {

    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);

//    @Query("SELECT p FROM Product p WHERE " +
//            "LOWER(p.name) LIKE LOWER(CONCAT('%', :term, '%')) OR " +
//            "LOWER(p.sku) LIKE LOWER(CONCAT('%', :term, '%')) OR " +
//            "LOWER(p.description) LIKE LOWER(CONCAT('%', :term, '%'))")
//    Page<Product> search(@Param("term") String term, Pageable pageable);
}
