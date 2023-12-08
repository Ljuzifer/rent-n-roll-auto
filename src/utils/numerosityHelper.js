export const carsNumerator = (arr, counter) => {
    const shownArr = arr?.slice(0, counter);

    return shownArr;
};

export const parseRentalConditions = (str) => {
    const arr = str.split("\n");
    const num = arr[0].split(" ").slice(-1).join("");

    arr[0] = arr[0].replace(num, "");
    arr.splice(1, 0, num);

    return arr;
};

export const parseMileage = (num) => num.toLocaleString("en-EN");

export const parsePrice = (str) => str.split("").slice(1).join("");
