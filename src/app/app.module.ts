import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"
import { MatTableModule } from "@angular/material/table"
import { MatPaginatorModule } from "@angular/material/paginator"
import { MatDialogModule } from "@angular/material/dialog"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HomeComponent } from "./pages/home/home.component"
import { TableProductsComponent } from "./shared/components/table-products/table-products.component";
import { DialogWindowComponent } from './shared/components/dialog/dialog.window/dialog.window.component';
import { SaveFormComponent } from './shared/components/dialog/save.form/save.form.component';
import { UpdateFormComponent } from './shared/components/dialog/update.form/update.form.component'

@NgModule({
    declarations: [AppComponent, HomeComponent, TableProductsComponent, DialogWindowComponent, SaveFormComponent, UpdateFormComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
