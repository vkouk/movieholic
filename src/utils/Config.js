const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

export const Config = {
    API_URL: env === 'development' ? 'http://localhost:5000/api' : 'https://movieholic-api.herokuapp.com/api',
    REACT_APP_STRIPE_KEY: env === 'development' ? 'pk_test_kV0XNSe1xcNhGWFYtuRXHnLt' : process.env.REACT_APP_STRIPE_KEY
};