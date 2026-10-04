package com.luv2code.ecommerce.dto;

import lombok.Data;

/**
 * Project: spring-boot-ecommerce
 * Package: com.luv2code.ecommerce.dto
 * <p>
 * User: AnDrew
 * Date: 2/11/2025
 * Time: 10:52 PM
 */
@Data
public class PaymentInfo {

    private int amount;
    private String currency;
    private String receiptEmail;
}
