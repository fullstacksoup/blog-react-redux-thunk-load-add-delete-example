import axios from 'axios';

var rootURL = 'http://localhost:60408';
// if (process.env.NODE_ENV === 'development') {      
//   rootURL = process.env.REACT_APP_BASE_URL_LOCAL;
// } else {
//   rootURL = process.env.REACT_APP_BASE_URL_PROD;
// }

const axiosConn = axios.create({
  baseURL: rootURL
});

export default axiosConn;

// Request interceptor (Outgoing)
axiosConn.interceptors.request.use(function (config) {
    // Do something before request is sent   
    console.log('Interceptor Request (Outgoing) ', config);
   
//     config.headers.API_KEY = 'YOUR_API_KEY';

//     if(sessionStorage.getItem('jwt_token')) {
//       config.headers.Authorization = `Bearer ${sessionStorage.getItem('jwt_token')}`;
//     }
    return config;
  }, function (error) {
    // Request error
    return Promise.reject(error);
});
  
// Response interceptor (Incoming) - Optional
axiosConn.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger

    // Response data
    console.log('Interceptor Resonse (Incoming) ', response);

    return response;
  }, function (error) {

    // Any status codes that falls outside the range of 2xx cause this function to trigger

    // Do something with response error
    return Promise.reject(error);
});