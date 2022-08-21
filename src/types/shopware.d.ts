export type NavigationElement = {
    id: string,
    name: string,
    translated: string,
    children: NavigationElement[],
    seoUrls: {
        seoPathInfo: string
    }[]
}

export type ProductResponse = {
    product: Product,
    configurator: PropertyGroup[]
}

export type Product = {
    id: string,
    name: string,
    translated: {
        name: string
    },
    cover: {
        media: Media
    },
    calculatedPrice: CalculatedPrice,
    description: string,
    media: ProductMedia[],
    seoUrls: {
        seoPathInfo: string
    }[]
}

export type PropertyGroup = {
    name: string,
    displayType: string,
    sortingType: string,
    description: string | null,
    options: {
        name: string,
        translated: {
            name: string
        },
    }[],
    translated: {
        name: string
    }
}

export type CalculatedPrice = {
    unitPrice: number,
    quantity: number,
    totalPrice: number,
    calculatedTaxes: {
        tax: number,
        taxRate: number,
        price: number
    }[],
    referencePrice: {
        price: number,
        purchaseUnit: number,
        referenceUnit: number,
        unitName: string,
    } | null,
    listPrice: number | null,
    regulationPrice: number | null,
}

export type ProductMedia = {
    media: Media
}

export type Media = {
    thumbnails: Thumbnail[]
}

export type Thumbnail = {
    width: number,
    height: number,
    url: string
}

export type ProductListing = {
    elements: Product[],
    total: number
}