package com.luv2code.ecommerce.dto;

import com.luv2code.ecommerce.entity.Address;
import com.luv2code.ecommerce.entity.Customer;
import com.luv2code.ecommerce.entity.Order;
import com.luv2code.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

/**
 * Project: spring-boot-ecommerce
 * Package: com.luv2code.ecommerce.dto
 * <p>
 * User: AnDrew
 * Date: 2/9/2025
 * Time: 5:48 PM
 */
@Data
public class Purchase {

    private Customer customer;

    private Address shippingAddress;

    private Address billingAddress;

    private Order order;

    private Set<OrderItem> orderItems;

}
