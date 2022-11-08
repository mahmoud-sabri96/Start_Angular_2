import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, title:"Angular-Home" },
  { path: "portfolio", component: PortfolioComponent, title: "Angular-Portfolio"},
  { path: "about", component: AboutComponent, title: "Angular-About" },
  { path: "contact", component: ContactComponent, title: "Angular-Contact" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
