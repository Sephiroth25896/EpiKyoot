import Config                   from '../config/config';
import Cookie                   from 'js-cookie';
import fetch                    from 'isomorphic-fetch';
import queryString              from 'query-string';

function getToken() {
    return Cookie.get('token');
}

function handleResultError(result) {
    let error = "";
    if (result.name)
        error += "[Error] :" + result.name + "\n";
    if (result.message)
        error += "[Message] : " + result.message + "\n";
    if (result.errorCode)
        error += "[Code] : " + result.errorCode;
    return error;
}
// method: GET POST DELETE PUT ...
// routeName (custom = false): name in constants or /v1/orders/:id
// routeName (custom = true): https://www.google.fr
// body: body for any method even GET
function request(method, routeName, body, custom = false) {
    return new Promise(function(resolve, reject) {
        let route = "";
            if (custom) route = routeName;
            else route = Config.hostname + routeName;
        let params = {
            method: method,
            headers: {
                'Authorization': 'JWT ' + getToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
        if (method === 'GET'){
            if (route[route.length - 1] === '/' && body) {route = route.substr(0, route.length - 1) + '?'}
            else if (route[route.length - 1] !== '?' && body) route += '?';
            route += queryString.stringify(body);
        } else if (body) {
            params.body = JSON.stringify(body)
        }
        fetch(route, params)
            .then((response) => {
                return response.json().then(body => {
                    if (response.status !== 200 || body.seneca) {
                        let myError = {
                            status: response.status,
                            message: handleResultError(body),
                            error: body,
                        };
                        reject(myError);
                    } else {
                        resolve(body);
                    }
                });
            })
            .catch(error => {
                let myError = {
                    status: -1,
                    message: error.toString(),
                    error: error,
                };
                console.warn("TIMEOUT");
                reject(myError);
            })
    });
}

function getPictureURL(key, width, height) {
    if (!key)
        return Config.staticURL + "/assets/img/default-product.jpg";
    let quality = 1;
    let maxSize = width > height ? width : height;
    let size = 'large';
    if (maxSize === 0) {
        size = 'large'
    } else if (maxSize <= 40){
        size = 'mini'
    } else if (maxSize <= 60){
        size = 'small'
    } else if (maxSize <= 300){
        size = 'medium'
    } else if (maxSize <= 800){
        size = 'big'
    }
    let nameSplit = key.split('.');
    let name = 'thumbs/' + nameSplit[0] + '_' + size + '.' + nameSplit[1];
    return Config.hostnameImage + '/' + name;
}

const API = {
    request,
    getPictureURL,
};

export default API;
