import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTgxMTBlMTRmMDc4ZDg3YmU3ODlkYTE3MGZhYjQyOCIsInN1YiI6IjY1MzBjN2VhMTEwOGE4MDEyY2E0YmM3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._H9uF71bbBGq8HkFNvScQz0b14p8WRmvHfLpXiy70Y4";

const headers = {
    Authorization : "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
    try{
      const {data} = await axios.get(BASE_URL+ url,{
        headers,
        params
      })
      return data;
    }catch (err) {
        console.log(err);
        return err;
    }
}