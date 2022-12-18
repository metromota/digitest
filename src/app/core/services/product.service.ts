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
        const endpoint = `${Environment.getDomain()}?limit=${limit}&skip=${skip}`
        return this.http.get<any>(endpoint)
    }

    saveProduct(product: Product) {
        const endpoint = `${Environment.getDomain()}/add`
        return this.http.post<Product>(endpoint, product)
    }

    updateProduct(id: number, product: Product) {
        const endpoint =  `${Environment.getDomain()}/${id}`
        return this.http.put<Product>(endpoint,product)
    }
}
