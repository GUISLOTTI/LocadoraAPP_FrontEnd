import { isStandalone, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocacaoListComponent } from './locacao/locacao-list/locacao-list.component';
import { LocacaoFormComponent } from './locacao/locacao-form/locacao-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LocacaoListComponent,
    LocacaoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }