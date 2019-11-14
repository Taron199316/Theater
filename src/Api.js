import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

class Api {

    /////    THEATERS    /////

    static getTheater() {
        return axios.get("/theater")
    }

    static getputTheater(data) {
        return axios.put("/theater", data)
    }

    static getpostTheater(data) {
        return axios.post("/theater", data)
    }

    ////////   FILM   /////////

    static getFilm(theatreId) {
        return axios.get(`/films/film?theatre_id=${theatreId}`)
    }

    static gettwoFilm(data) {
        return axios.get('/films/filmtwo', data)
    }

    static getputFilm(data) {
        return axios.put("/films/film", data)
    }

    static getpostFilm(data) {
        return axios.post("/films/film", data)
    }

    static removeFilm(id) {
        return axios.delete("/films/film", {data: {id}})
    }

    /////     USER     /////


    static getUsers(data) {
        return axios.put("/users", data)
    }

    static removeUser(id) {
        return axios.delete("/users", {data: {id}})
    }

}

export default Api;