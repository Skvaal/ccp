import axios from 'axios';
import packageJson from '../package.json';

export async function request (method, url, data, headers) {
    let response = await axios({
        method: method,
        url: `${packageJson.url}${url}`,
        headers: headers,
        data: data
    }).catch((error) => {
        console.log(error);
        }
    );
    if (response.status === 200) {
        return {data: response};
    } else {
        return {error: response};
    }
}
