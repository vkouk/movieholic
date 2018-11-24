const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

export const Config = {
    API_URL: env === 'development' ? 'https://movieholic-api.herokuapp.com/api' : 'https://movieholic-api.herokuapp.com/api',
    STRIPE_KEY: env === 'development' ? 'pk_test_kV0XNSe1xcNhGWFYtuRXHnLt' : process.env.STRIPE_KEY
};