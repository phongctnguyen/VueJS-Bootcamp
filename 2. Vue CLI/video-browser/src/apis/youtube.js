import axios from 'axios';

const API_KEY = 'AIzaSyAc-sazfLP5C0TDwkpMD9NZbt5irlmfUv0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    type: 'video',
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
});