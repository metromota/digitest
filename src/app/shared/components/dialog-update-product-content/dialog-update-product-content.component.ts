import { Component, Inject } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { ProductService } from "src/app/core/services/product.service"
import { Product } from "../../models/product"

@Component({
    selector: "app-dialog-update-product-content",
    templateUrl: "./dialog-update-product-content.component.html",
    styleUrls: ["./dialog-update-product-content.component.css"],
})
export class DialogUpdateProductContentComponent {
    form: FormGroup
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Product,
        public dialogRef: MatDialogRef<DialogUpdateProductContentComponent>,
        private service: ProductService,
        formbuilder: FormBuilder
    ) {
        this.form = formbuilder.group({
            title: [
                "",
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                ]),
            ],
        })
    }

    onNoClick(): void {
        this.dialogRef.close()
    }

    handleUpdateProduct() {
        const { id } = this.data

        this.service
            .updateProduct(id, this.form.value)
            .subscribe((response) => {
                alert(JSON.stringify(response))
            })
    }
}
