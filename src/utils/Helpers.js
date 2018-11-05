import moment from 'moment';

export const cartTotal = product => {
    let total = 0;

    if (product && product.length >= 1) {
        product.map(rec => {
            const rentalRating = parseFloat((rec.rating / 10).toFixed(2));
            const rentalDays = moment().diff(new Date(), 'days');

            total = isNaN(parseFloat((rentalRating * rentalDays * 0.8).toFixed(2))) ? total + 0 : total + parseFloat((rentalRating * rentalDays * 0.8).toFixed(2));
        });
    }
    return total;
};

export const productCost = rating => {
    let total = 0;

    if (rating) {
        const rentalRating = parseFloat((rating / 10).toFixed(2));
        const rentalDays = moment().diff(new Date(), 'days');

        total = isNaN(parseFloat((rentalRating * rentalDays * 0.8).toFixed(2))) ? total + 0 : total + parseFloat((rentalRating * rentalDays * 0.8).toFixed(2));
    }
    return total;
};