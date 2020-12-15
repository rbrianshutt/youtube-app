import axios from 'axios';

const KEY = 'AIzaSyDODfs2hBwBCHup0sRxX5fk5NxQc2BdRp0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});