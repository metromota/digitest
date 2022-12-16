class Environment {
    private static url: string = `https://dummyjson.com/products`

    static getDomain(): string {
        return this.url
    }
}

export { Environment }
