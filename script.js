function getPosts(limit) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        const url = 'https://jsonplaceholder.typicode.com/users';
        xhr.open('GET', `${url}?_limit=${limit}`);
        xhr.responseType = 'json';

        xhr.onload = function() {
            resolve(xhr.response);
        };

        xhr.onerror = function(){
            reject(console.log('ERROR', xhr.status));
        };

        xhr.send();
    
    });
}
getPosts(6).then(console.log);



