package com.luv2code.ecommerce.service;

import com.luv2code.ecommerce.dto.PaymentInfo;
import com.luv2code.ecommerce.dto.Purchase;
import com.luv2code.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

/**
 * Project: spring-boot-ecommerce
 * Package: com.luv2code.ecommerce.service
 * <p>
 * User: AnDrew
 * Date: 2/9/2025
 * Time: 5:53 PM
 */
public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
