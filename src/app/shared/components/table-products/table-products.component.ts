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
    public isempty: boolean
    public isloading: boolean
    public pageSize: number
    public pageIndex: number
    public length: number
    public displayedColumns: string[] = [
        "id",
        "edit",
        "title",
        "description",
        "brand",
        "price",
    ]
    public dataSource$: MatTableDataSource<Product>
    @ViewChild(MatPaginator) paginator: MatPaginator

    constructor(private service: ProductService) {
        this.isloading = true
    }

    ngOnInit(): void {
        const onErrorRequest = (error) => this.changeLoading(false)
        const onSuccessRequest = (productsFromApi) => {
            const sizeLength = productsFromApi.total
            const productResponse = productsFromApi.products
            this.changeLoading(false)
            this.isempty = sizeLength < 1
            this.dataSource$ = new MatTableDataSource<Product>(productResponse)
            this.dataSource$.paginator = this.paginator
            this.length = sizeLength
        }
        this.service.listPaginatedProducts(5, 0).subscribe(onSuccessRequest, onErrorRequest)
    }

    handlePageEvent($event) {
        const limit = $event.pageSize
        const skip = $event.pageIndex * $event.pageSize
        const onSuccessRequest = (productsFromApi) => {
            const productResponse = productsFromApi.products
            this.changeLoading(false)
            this.dataSource$ = new MatTableDataSource<Product>(productResponse)
        }
        const onErrorRequest = (error) => this.changeLoading(false)
        this.changeLoading(true)
        this.service.listPaginatedProducts(limit, skip).subscribe(onSuccessRequest, onErrorRequest)
    }

    private changeLoading(status: boolean) {
        this.isloading = status
    }
}
