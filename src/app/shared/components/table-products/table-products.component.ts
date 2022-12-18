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
    isempty: boolean
    isloading: boolean
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
    dataSource$: MatTableDataSource<Product>
    @ViewChild(MatPaginator) paginator: MatPaginator

    constructor(private service: ProductService) {
        this.isloading = true
    }

    ngOnInit(): void {
        this.service.listPaginatedProducts(5, 0).subscribe(
            (productsFromApi) => {
                this.isloading = false
                const sizeLength = productsFromApi.total
                this.isempty = sizeLength < 1
                this.dataSource$ = new MatTableDataSource<Product>(
                    productsFromApi.products
                )
                this.dataSource$.paginator = this.paginator
                this.length = sizeLength
            },
            (error) => (this.isloading = false)
        )
    }

    handlePageEvent($event) {
        this.isloading = true
        const limit = $event.pageSize
        const skip = $event.pageIndex * $event.pageSize
        this.service.listPaginatedProducts(limit, skip).subscribe(
            (productsFromApi) => {
                this.isloading = false
                this.dataSource$ = new MatTableDataSource<Product>(
                    productsFromApi.products
                )
            },
            (error) => (this.isloading = false)
        )
    }
}
