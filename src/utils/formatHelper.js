export default function formatAddress(address) {
    const arr = address.split(",");
    const city = arr[1];
    const country = arr[arr.length - 1];
    return { city, country };
}
