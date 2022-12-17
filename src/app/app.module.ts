import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule } from "@angular/forms"

import { MatTableModule } from "@angular/material/table"
import { MatPaginatorModule } from "@angular/material/paginator"
import { MatDialogModule } from "@angular/material/dialog"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatDividerModule } from "@angular/material/divider"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HomeComponent } from "./pages/home/home.component"
import { TableProductsComponent } from "./shared/components/table-products/table-products.component"
import { DialogSaveProductComponent } from "./shared/components/dialog-save-product/dialog-save-product.component"
import { DialogSaveProductContentComponent } from "./shared/components/dialog-save-product-content/dialog-save-product-content.component"
import { LoadingComponent } from "./shared/components/loading/loading.component"

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TableProductsComponent,
        DialogSaveProductComponent,
        DialogSaveProductContentComponent,
        LoadingComponent,
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
        MatDividerModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
