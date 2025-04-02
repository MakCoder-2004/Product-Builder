export const textSlicer = (text: string, maxLength: number = 40): string => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
    }
    return text;
};


