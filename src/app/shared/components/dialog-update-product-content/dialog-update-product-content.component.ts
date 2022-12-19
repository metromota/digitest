import { Component, Inject } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { ProductService } from "src/app/core/services/product.service"
import { Product } from "../../models/product"
import { ToastrService } from "ngx-toastr"

@Component({
    selector: "app-dialog-update-product-content",
    templateUrl: "./dialog-update-product-content.component.html",
})
export class DialogUpdateProductContentComponent {
    public form: FormGroup
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Product,
        private formbuilder: FormBuilder,
        public dialogRef: MatDialogRef<DialogUpdateProductContentComponent>,
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

    handleUpdateProduct() {
        const { id } = this.data
        const onSuccessUpdate =  (response) => {
            this.toast.success("Produto atualizado com sucesso")
            console.log(JSON.stringify(response)) // conferencia pelo console do response
        }
        const onErrorUpdate = (error) => {
            this.toast.error(
                "Ocorreu um erro ao tentar atualizar o produto"
            )
        }
        this.service.updateProduct(id, this.form.value).subscribe(onSuccessUpdate,onErrorUpdate)
    }
}
