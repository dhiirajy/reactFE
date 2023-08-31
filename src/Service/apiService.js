// apiService.js

import axios from 'axios';
const BASE_URL = 'http://localhost:3012/api';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTY5MzQxNjc2NywiZXhwIjoxNzAyMDU2NzY3fQ.SSRI19DFttNgRjE3pL31VImQIo-CVSgdeLYs67wRYlg";

const fetchData = async (url, options = {}, token = TOKEN) => {
    const apiurl = `${BASE_URL}${url}`;
    try {
        const response = await axios(apiurl, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: token ? `Bearer ${token}` : undefined
            }
        });

        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

export default fetchData;
