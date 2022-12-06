import axios from "axios";

export const AuthTokenStorageKey = '';

export class Repository{

    getRequestPromise = (method, url, data) => {

        console.log(data)
        return new Promise((resolve, reject) => {
            const config = {
                method: method,
                url: url,
                data: data,
                // headers: headers,
            };

            // console.log(LogPrefix, 'HTTP requesting :', config);
            axios.request(config)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    console.log(error)
                    reject(error);
                });
        });
    }

}