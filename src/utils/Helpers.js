import moment from 'moment';

export const cartTotal = product => {
    let total = 0;

    if (product && product.length >= 1) {
        product.map(rec => {
            const rentalRating = (rec.rating / 10).toFixed(2);
            const rentalDays = moment().diff(new Date(), 'days');

            total = (rentalRating * rentalDays * 0.8).toFixed(2);
        });
    }

    return total;
};