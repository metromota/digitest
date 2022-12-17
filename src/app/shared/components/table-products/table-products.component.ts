import { ProductService } from "./../../../core/services/product.service"
import { Component, OnInit, ViewChild } from "@angular/core"
import { Product } from "../../models/product"
import { MatTableDataSource } from "@angular/material/table"
import { MatPaginator } from "@angular/material/paginator"

@Component({
    selector: "app-table-products",
    templateUrl: "./table-products.component.html",
})
export class TableProductsComponent implements OnInit {
    displayedColumns: string[] = ["id", "title", "price", "brand"]
    dataSource: MatTableDataSource<Product>
    @ViewChild(MatPaginator) paginator: MatPaginator

    constructor(private service: ProductService) {}

    ngOnInit(): void {
        this.service.listProducts().subscribe((dummyApiAllProducts) => {
            this.dataSource = new MatTableDataSource<Product>(
                dummyApiAllProducts.products
            )
            this.dataSource.paginator = this.paginator
        })
    }
}
