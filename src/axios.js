import axios from "axios";
const Instance = axios.create({ 
    /*iniallizing axios */
    baseURL : "https://api.themoviedb.org/3",
});
 /* baseurl makes request to movie db*/
export default Instance;