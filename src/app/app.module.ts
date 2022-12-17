import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"
import { MatTableModule } from "@angular/material/table"
import { MatPaginatorModule } from "@angular/material/paginator"
import { MatDialogModule } from "@angular/material/dialog"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HomeComponent } from "./pages/home/home.component"
import { TableProductsComponent } from "./shared/components/table-products/table-products.component"
import { DialogSaveProductComponent } from "./shared/components/dialog-save-product/dialog-save-product.component"
import { DialogSaveProductContentComponent } from "./shared/components/dialog-save-product-content/dialog-save-product-content.component"

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TableProductsComponent,
        DialogSaveProductComponent,
        DialogSaveProductContentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
