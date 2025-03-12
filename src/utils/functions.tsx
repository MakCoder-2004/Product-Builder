export const textSlicer = (text: string, maxLength: number = 49): string => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
    }
    return text;
};
