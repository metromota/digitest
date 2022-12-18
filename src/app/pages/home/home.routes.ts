import { Routes } from "@angular/router"
import { HomeComponent } from "./home.component"

const homeRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path:"**",
        pathMatch: "full",
        redirectTo:"/"
    }
]

export { homeRoutes }
