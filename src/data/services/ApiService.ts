import axios from 'axios'; //ajuda a automatizar o fetch (busca no banco da API por url)
const url = 'https://ediaristas-workshop.herokuapp.com';

export const ApiService = axios.create({
    baseURL: url,
    headers:{
        'Content-Type': 'aplication/json'
    }
});