import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { BannerComponent } from './Banner/Banner.component';
import { PromocaoComponent } from './Promocao/Promocao.component';
import { ProdutosComponent } from './Produtos/Produtos.component';
import { FooterComponent } from './Footer/Footer.component';

@NgModule({
  declarations: [					
    AppComponent,
      NavbarComponent,
      BannerComponent,
      PromocaoComponent,
      ProdutosComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
