package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * Project: spring-boot-ecommerce
 * Package: com.luv2code.ecommerce.dao
 * <p>
 * User: AnDrew
 * Date: 2/6/2025
 * Time: 9:10 AM
 */
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategeoryRepository extends JpaRepository<ProductCategory, Long> {
}
