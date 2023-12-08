export const autoFiltration = (cars, filter) => {
    if (!filter) {
        return cars;
    }

    return cars.filter((car) => {
        const price = parseInt(car.rentalPrice.substring(1));
        const mileage = parseFloat(car.mileage);

        const brandMatch = !filter.brand.value || car.make.toLowerCase() === filter.brand.value.toLowerCase();
        const priceMatch = !filter.price.value || price <= filter.price.value;
        const minMileageMatch = !filter.from || mileage >= filter.from;
        const maxMileageMatch = !filter.to || mileage <= filter.to;

        return brandMatch && priceMatch && minMileageMatch && maxMileageMatch;
    });
};
