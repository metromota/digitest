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
    pageSize: number
    pageIndex: number
    length: number
    displayedColumns: string[] = [
        "id",
        "title",
        "description",
        "price",
        "brand",
        "edit",
    ]
    dataSource: MatTableDataSource<Product>
    @ViewChild(MatPaginator) paginator: MatPaginator

    constructor(private service: ProductService) {}

    ngOnInit(): void {
        this.service
            .listPaginatedProducts(5, 0)
            .subscribe((productsFromApi) => {
                let sizeLength = productsFromApi.total
                this.dataSource = new MatTableDataSource<Product>(
                    productsFromApi.products
                )
                this.dataSource.paginator = this.paginator
                this.length = sizeLength

                console.log(sizeLength)
            })
    }

    handlePageEvent($event) {
        let limit = $event.pageSize
        let skip = $event.pageIndex * $event.pageSize
        this.service
            .listPaginatedProducts(limit, skip)
            .subscribe((productsFromApi) => {
                this.dataSource = new MatTableDataSource<Product>(
                    productsFromApi.products
                )
            })
    }
}
