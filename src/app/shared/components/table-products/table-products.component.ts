import { Component } from "@angular/core"
import { Product } from "../../models/product"

@Component({
    selector: "app-table-products",
    templateUrl: "./table-products.component.html",
    styleUrls: ["./table-products.component.css"],
})
export class TableProductsComponent {
    public productList$: Product[] = []
    public displayedColumns: string[] = ["id", "title", "price", "brand"]
}
