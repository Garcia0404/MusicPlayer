import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api-music-player-beta.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetcher = async (url) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
