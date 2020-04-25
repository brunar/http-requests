import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//See in the console
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'; //do not need do that only showing possibilities

//Show the error for requests Globally 
//Always need to return the request otherwise it will block the request, you see the error - somenting went wrong
//To simulate an error example on blog change the url axios.get
axios.interceptors.request.use(request => {
    console.log(request);
    //Possible edit the request before return
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

//and Also to show the error for response Globally 
axios.interceptors.response.use(response => {
    console.log(response);
    //Possible edit the request before return
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
