import { Component, Inject } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { ProductService } from "src/app/core/services/product.service"
import { Product } from "../../models/product"

@Component({
    selector: "app-dialog-save-product-content",
    templateUrl: "./dialog-save-product-content.component.html",
    styleUrls: ["./dialog-save-product-content.component.css"],
})
export class DialogSaveProductContentComponent {
    form: FormGroup
    constructor(
        public dialogRef: MatDialogRef<DialogSaveProductContentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Product,
        private formbuilder: FormBuilder,
        private service: ProductService
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

    handleSaveProduct() {
        this.service.saveProduct(this.form.value).subscribe((response) => {
            alert(JSON.stringify(response))
        })
    }
}
