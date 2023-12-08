export const formatAddress = (address) => {
    const arr = address.split(",");
    const city = arr[1];
    const country = arr[arr.length - 1];
    return { city, country };
};

export const shortString = (arrStrings) => {
    if (!arrStrings || arrStrings.length === 0) {
        return "";
    }

    let short = arrStrings[0];
    for (let i = 1; i < arrStrings.length; i++) {
        const currentString = arrStrings[i];
        if (currentString.split(" ").length < short.split(" ").length) {
            short = currentString;
        }
    }

    const shortWords = short.split(" ");

    return shortWords.length > 3 ? shortWords.slice(0, 3).join(" ") : short;
};
