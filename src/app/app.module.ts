import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ComingSoonPageComponent } from './coming-soon-page/coming-soon-page.component';
import { BasicsPageComponent } from './basics-page/basics-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotebookCardComponent } from './notebook-card/notebook-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppNavbarComponent, ComingSoonComponent, ComingSoonPageComponent, BasicsPageComponent, NotFoundComponent, NotebookCardComponent]
})
export class AppModule { }
