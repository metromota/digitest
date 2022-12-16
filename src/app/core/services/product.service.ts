import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Environment } from "src/app/shared/environment"

@Injectable({
    providedIn: "root",
})
export class ProductService {
    constructor(private http: HttpClient) {}

    listProducts() {
        return this.http.get<any>(Environment.getDomain())
    }
}
