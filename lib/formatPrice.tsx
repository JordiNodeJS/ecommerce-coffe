export function formatPrice(price: number) {
    const priceFormated = new Intl.NumberFormat('es-Bo', {
        style: "currency",
        currency: "BOB"
    })
    const finalPrice = priceFormated.format(price)
    return finalPrice
}