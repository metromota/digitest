import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Environment } from "src/app/shared/environment"
import { Product } from "src/app/shared/models/product"

@Injectable({
    providedIn: "root",
})
export class ProductService {
    constructor(private http: HttpClient) {}

    listPaginatedProducts(limit: number, skip: number) {
        return this.http.get<any>(
            `${Environment.getDomain()}?limit=${limit}&skip=${skip}`
        )
    }

    saveProduct(product: Product) {
        return this.http.post<Product>(
            `${Environment.getDomain()}/add`,
            product
        )
    }

    updateProduct(id: number, product: Product) {
        return this.http.put<Product>(
            `${Environment.getDomain()}/${id}`,
            product
        )
    }
}
