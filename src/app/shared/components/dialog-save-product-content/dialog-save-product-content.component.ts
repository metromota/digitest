import { ToastrService } from "ngx-toastr"
import { Component, Inject } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { ProductService } from "src/app/core/services/product.service"
import { Product } from "../../models/product"

@Component({
    selector: "app-dialog-save-product-content",
    templateUrl: "./dialog-save-product-content.component.html",
})
export class DialogSaveProductContentComponent {
    public form: FormGroup
    constructor(
        public dialogRef: MatDialogRef<DialogSaveProductContentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Product,
        private formbuilder: FormBuilder,
        private service: ProductService,
        private toast: ToastrService
    ) {
        const validatorsOfTitle = Validators.compose([
            Validators.required,
            Validators.minLength(3),
        ])
        const title = [
            "",
            validatorsOfTitle,
        ]
        this.form = formbuilder.group({title})
    }

    onNoClick(): void {
        this.dialogRef.close()
    }

    handleSaveProduct() {
        const onSuccessSave = (response) => {
            this.toast.success("Produto criado com sucesso")
            console.log(JSON.stringify(response)) // conferencia do response no console
        }
        const onErrorSave = (error) => {
            this.toast.error("Ocorreu um erro ao tentar salvar o produto")
        }
        this.service.saveProduct(this.form.value).subscribe(onSuccessSave, onErrorSave)
    }
}
