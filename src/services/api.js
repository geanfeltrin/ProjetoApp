import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.trello.com/1/',
    params:{
        key: '675c4bc27d36b1bff30c1889b1305787',
        token: '4f32f44c9664bb0a13f6e073c5d13176e5bddc8a704947d0018bb664c00b156e'
    }
})




export default api