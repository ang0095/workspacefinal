import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { CreateComponent } from './players/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './players/details/details.component';
import { ListComponent } from './players/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    CreateComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
