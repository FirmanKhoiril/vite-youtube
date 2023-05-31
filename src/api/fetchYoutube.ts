import axios from "axios";

const Base_url = "https://youtube-v38.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v38.p.rapidapi.com",
  },
};

export const FetchYoutube = async (url: string): Promise<any> => {
  const { data } = await axios.get(`${Base_url}/${url}`, options);

  return data;
};
