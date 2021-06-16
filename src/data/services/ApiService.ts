import axios from 'axios'; //ajuda a automatizar o fetch (busca no banco da API por url)
const url = "http://127.0.0.1:8000";

export const ApiService = axios.create({
    baseURL: url,
    headers:{
        'Content-Type': 'aplication/json'
    }
});