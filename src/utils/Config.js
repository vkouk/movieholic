const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

export const Config = {
    API_URL: env === 'development' ? 'http://localhost:5000/api' : 'https://movieholic-api.herokuapp.com/api'
};