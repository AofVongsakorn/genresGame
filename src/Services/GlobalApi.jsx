import axios from "axios";
const key = "355593a42f874c17a668ecd2d557dd87"
const axioCreate = axios.create({
    baseURL: "https://api.rawg.io/api",
    // params: {
    //   key: "18d8dc115d954615a6fe8522598e8a97",
    // },
});

const getGenreList = axioCreate.get('/genres?key=' + key)
export default { 
    getGenreList 
} 