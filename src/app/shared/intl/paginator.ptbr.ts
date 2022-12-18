import { MatPaginatorIntl } from "@angular/material/paginator"

export class MatPaginatorIntlPtBr extends MatPaginatorIntl {
    override itemsPerPageLabel: string = "Itens por página:"
    override nextPageLabel: string = "Próxima"
    override previousPageLabel: string = "Anterior"
    override firstPageLabel: string = "Primeira"
    override lastPageLabel: string = "Última"

    override getRangeLabel: (
        page: number,
        pageSize: number,
        length: number
    ) => string = (page: number, pageSize: number, length: number) => {
        if (length == 0 || pageSize == 0) {
            return `0 de ${length}`
        }

        length = Math.max(length, 0)

        const startIndex = page * pageSize

        const endIndex =
            startIndex < length
                ? Math.min(startIndex + pageSize, length)
                : startIndex + pageSize

        return `${startIndex + 1} – ${endIndex} de ${length}`
    }
}
