import moment from 'moment';

export const returnRentTotal = (movies, series, dateOrdered) => {
    let total = 0;

    if (movies || series) {
        const moviesRating = movies ? movies.reduce((acc, curr) => (typeof acc !== 'undefined' ? acc : 0) + (curr.rating !== 'N/A' ? parseFloat(curr.rating) : 1), 0) : 0;
        const seriesRating = series ?series.reduce((acc, curr) => (typeof acc !== 'undefined' ? acc : 0) + (curr.rating !== 'N/A' ? parseFloat(curr.rating) : 1), 0) : 0;
        const rentalRating = parseFloat(((moviesRating + seriesRating) / 10).toFixed(2));
        const rentalDays = moment().diff(dateOrdered, 'days') + 1;

        total = parseFloat(rentalDays * rentalRating * 0.9).toFixed(2);
    }
    return total;
};

export const returnRentProductCost = (rating, dateOrdered) => {
    let total = 0;

    if (rating) {
        rating = rating !== 'N/A' ? rating : 1;
        const rentalRating = parseFloat(rating / 10).toFixed(2);
        const rentalDays = moment().diff(dateOrdered, 'days') + 1;

        total = parseFloat((rentalRating * rentalDays * 0.9).toFixed(2));
    }
    return total;
};