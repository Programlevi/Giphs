import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key: '6jhYNMVJNVwJa554AHNIfxTZ6O1pfA0N',
        limit: 15,
        rating: 'G'
    }
})