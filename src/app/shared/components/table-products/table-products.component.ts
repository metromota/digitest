import { ProductService } from "./../../../core/services/product.service"
import { Component, OnInit } from "@angular/core"
import { Product } from "../../models/product"

@Component({
    selector: "app-table-products",
    templateUrl: "./table-products.component.html",
    styleUrls: ["./table-products.component.css"],
})
export class TableProductsComponent implements OnInit {
    public productList$: Product[] = []
    public displayedColumns: string[] = ["id", "title", "price", "brand"]

    constructor(private service: ProductService) {}

    ngOnInit(): void {
        this.service.listProducts().subscribe((response) => {
            this.productList$ = response.products
        })
    }
}
