import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AppRoutingModule } from "./app-routing.module"

import { MatTableModule } from "@angular/material/table"
import {
    MatPaginatorIntl,
    MatPaginatorModule,
} from "@angular/material/paginator"
import { MatDialogModule } from "@angular/material/dialog"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatDividerModule } from "@angular/material/divider"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"

import { AppComponent } from "./app.component"
import { HomeComponent } from "./pages/home/home.component"
import { TableProductsComponent } from "./shared/components/table-products/table-products.component"
import { DialogSaveProductComponent } from "./shared/components/dialog-save-product/dialog-save-product.component"
import { DialogSaveProductContentComponent } from "./shared/components/dialog-save-product-content/dialog-save-product-content.component"
import { LoadingComponent } from "./shared/components/loading/loading.component"
import { DialogUpdateProductComponent } from "./shared/components/dialog-update-product/dialog-update-product.component"
import { DialogUpdateProductContentComponent } from "./shared/components/dialog-update-product-content/dialog-update-product-content.component"
import { MatPaginatorIntlPtBr } from "./shared/intl/paginator.ptbr"

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TableProductsComponent,
        DialogSaveProductComponent,
        DialogSaveProductContentComponent,
        LoadingComponent,
        DialogUpdateProductComponent,
        DialogUpdateProductContentComponent,
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
        MatProgressSpinnerModule,
    ],
    providers: [
        {
            provide: MatPaginatorIntl,
            useClass: MatPaginatorIntlPtBr,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
