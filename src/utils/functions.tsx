export const textSlicer = (text: string, maxLength: number = 40): string => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
    }
    return text;
};

export const putZerosAfterPrice = (price: string) => {
    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) return price;
    return priceNumber.toFixed(2).toString();
}
