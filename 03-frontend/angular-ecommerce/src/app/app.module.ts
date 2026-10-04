import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

// Auth0 imports
import { AuthHttpInterceptor, AuthModule, AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthGuard] },
  { path: 'members', component: MembersPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'search/:keyword', component: ProductListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    MembersPageComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    ReactiveFormsModule,

    // Auth0 Module Configuration
    AuthModule.forRoot({
      domain: 'yourOwnDomain', // TODO: ADD your own
      clientId: 'yourOwnClientID',  // TODO: Replace with your actual Client ID from Auth0 dashboard
      authorizationParams: {
        redirect_uri: window.location.origin
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: 'http://localhost:8080/api/orders/*',
            tokenOptions: {
              authorizationParams: {
                audience: 'YOUR_API_AUDIENCE_IF_SET'  // Optional: only if configured an API in Auth0
              }
            }
          }
        ]
      }
    }),
    LoginStatusComponent
  ],
  providers: [
    ProductService,
    provideHttpClient(withInterceptorsFromDi()),

    // Auth0 automatically provides its own interceptor
    // If you have custom logic in AuthInterceptorService, you can keep it:
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }

    // Otherwise, remove the line above — Auth0's interceptor handles JWT attachment
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
