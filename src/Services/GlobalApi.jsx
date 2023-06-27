import axios from "axios";
const key = "355593a42f874c17a668ecd2d557dd87"
const axiosCreate = axios.create({
    baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get('/genres?key=' + key)
const getAllGamesList = axiosCreate.get('/games?key=' + key)
export default { 
    getGenreList,
    getAllGamesList
} 