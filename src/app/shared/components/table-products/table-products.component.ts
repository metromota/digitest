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
    empty: boolean
    loading: boolean
    pageSize: number
    pageIndex: number
    length: number
    displayedColumns: string[] = [
        "id",
        "edit",
        "title",
        "description",
        "brand",
        "price",
    ]
    dataSource: MatTableDataSource<Product>
    @ViewChild(MatPaginator) paginator: MatPaginator

    constructor(private service: ProductService) {
        this.loading = true
    }

    ngOnInit(): void {
        this.service
            .listPaginatedProducts(5, 0)
            .subscribe((productsFromApi) => {
                this.loading = false
                const sizeLength = productsFromApi.total
                this.empty = sizeLength < 1
                this.dataSource = new MatTableDataSource<Product>(
                    productsFromApi.products
                )
                this.dataSource.paginator = this.paginator
                this.length = sizeLength
            })
    }

    handlePageEvent($event) {
        this.loading = true
        const limit = $event.pageSize
        const skip = $event.pageIndex * $event.pageSize
        this.service
            .listPaginatedProducts(limit, skip)
            .subscribe((productsFromApi) => {
                this.loading = false
                this.dataSource = new MatTableDataSource<Product>(
                    productsFromApi.products
                )
            })
    }
}
