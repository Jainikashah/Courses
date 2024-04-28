// to get custom axios instance for different files.
// import this from any file you want this to be the config. (done in signup module)
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vuejs-practice-app-default-rtdb.firebaseio.com/'
})

// this something header, would be visible only in the api, that uses this custom instance, i.e. in signup api.
instance.defaults.headers.common['something'] = 'something'

export default instance;