import { Component } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { DialogSaveProductContentComponent } from "../dialog-save-product-content/dialog-save-product-content.component"

@Component({
    selector: "app-dialog-save-product",
    templateUrl: "./dialog-save-product.component.html",
})
export class DialogSaveProductComponent {
    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogSaveProductContentComponent, {
            width: "450px",
        })
    }
}
