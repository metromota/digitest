import { Component, Input } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { DialogUpdateProductContentComponent } from "../dialog-update-product-content/dialog-update-product-content.component"

@Component({
    selector: "app-dialog-update-product",
    templateUrl: "./dialog-update-product.component.html",
    styleUrls: ["./dialog-update-product.component.css"],
})
export class DialogUpdateProductComponent {
    @Input() id: number
    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogUpdateProductContentComponent, {
            width: "450px",
            data: { id: this.id },
        })

        // dialogRef.afterClosed().subscribe((result) => {})
    }
}
