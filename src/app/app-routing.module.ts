import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PricingsComponent } from "./components/pricings/pricings.component";
import { ProtectedComponent } from "./components/protected/protected.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "pricings", component: PricingsComponent },
  {
    path: "protected",
    component: ProtectedComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
