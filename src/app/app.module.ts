import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HomeComponent } from "./pages/home/home.component";
import { TableProductsComponent } from './shared/components/table-products/table-products.component'

@NgModule({
    declarations: [AppComponent, HomeComponent, TableProductsComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
