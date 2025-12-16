# Full-Stack E-Commerce Application (Angular + Spring Boot)

This repository contains a **complete full-stack e-commerce website** built with **Angular** (frontend) and **Spring Boot** (backend). The project follows the popular "Full Stack: Angular and Java Spring Boot E-Commerce Website" course by Chad Darby (luv2code).

The application features product browsing, search, shopping cart, secure checkout with address forms, and **real credit card payments** via Stripe (test mode). Authentication is configured with Okta (OAuth2/OIDC), but login is **disabled in this public version** to protect sensitive credentials.

## Features

### Frontend (Angular)
- Responsive product grid with images, prices, and descriptions
- Product search and category filtering
- Shopping cart (add/remove items, update quantities)
- Multi-step checkout form (shipping/billing addresses)
- Secure card input using **Stripe Elements** (no card data touches your server)
- Order confirmation with tracking number

### Backend (Spring Boot)
- REST API powered by Spring Data REST + custom controllers
- Endpoints for products, categories, checkout, and payments
- `/api/checkout/purchase` – Saves full order to database
- `/api/checkout/payment-intent` – Creates secure Stripe PaymentIntent
- MySQL database with JPA/Hibernate entities (Product, Category, Order, OrderItem, Customer, Address, Country/State)
- Server-side search (name, SKU, description)
- Ready for Okta authentication (protects order history endpoints)
- CORS and security configuration

### Payments & Security
- Full Stripe PaymentIntents integration (PCI-compliant)
- Test mode enabled – use card `4242 4242 4242 4242` (any future date/CVC)

## Tech Stack

**Frontend**
- Angular 17+
- TypeScript
- Angular Material / Bootstrap
- @okta/okta-angular + Okta Sign-In Widget
- Stripe Elements (@stripe/stripe-js)

**Backend**
- Java 17
- Spring Boot 3
- Spring Data JPA & Spring Data REST
- MySQL
- Stripe Java SDK
- Okta OAuth2/JWT (configured)
- Lombok

## Project Structure
```
├── angular-ecommerce/     # Angular frontend source
├── spring-boot-ecommerce/ # Spring Boot backend source
├── README.md
```

## How to Run Locally

### Prerequisites
- Node.js & npm (for Angular)
- Java 17 & Maven (for Spring Boot)
- MySQL server running (default port 3306 or 3307)
- Stripe test account (for payments)
- (Optional) Auth0 developer account (for login – not required for basic checkout)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Itsyourboy13/ecommerce-fullstack-portfolio.git
   cd fullstack-ecommerce-portfolio
2. **Start the Backend**
   ```bash
   cd spring-boot-ecommerce
   mvn spring-boot:run
- Backend runs on https://localhost:9898
- Database schema `full-stack-ecommerce` is created automatically
3. **Start the Frontend**
   ```bash
   cd ../angular-ecommerce
   npm install
   ng serve
4. **Open the Application**
- Visit https://localhost:4200
- Browse products → add to cart → checkout → pay with test card (If you wish to actually test payment you will have to change `Stripe.key.secret` in application.properties in the backend)

### Testing Payments
- Use Stripe test card ***4242 4242 4242 4242***

### Enabling Login (Optional)
- Create a free auth0 developer account
- update `angular-ecommerce/src/app/config/my-app-config.ts` with your client ID, issuer, etc.
- Update backend `application.properties` with matching values

### Security Notes
- **Stripe and Auth0 secrets are not committed**
- For local testing:
  - Set `Stripe_Secret_Key=sk_test_...` environment variable in backend
  - Or temporarily add to `application.properties` (do not commit)
- This follows best practices: never expose credentials in public repos

## Why This Project?
As a recent bachelor's graduate entering the job market, I completed and combined both parts of this comprehensive full-stack course to demonstrate:
- End-to-end development (frontend + backend)
- Modern Angular development with services, routing, and third-party libraries
- Secure REST API design with Spring Boot
- Real payment processing with Stripe
- Database modeling and transactional operations
- Separation of concerns and clean architecture

This is a fully functional e-commerce site you can run locally in minutes — perfect for showcasing real-world full-stack skills.
Thanks for visiting my portfolio project! Feedback always welcome
