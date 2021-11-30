function getPosts(limit) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        const url = 'https://jsonplaceholder.typicode.com/users';
        xhr.open('GET', `${url}?_limit=${limit}`);
        xhr.responseType = 'json';

        xhr.onload = function() {
            if(xhr.status >= 400){
                reject(xhr.response)
            } else { 
                resolve(xhr.response)
            }
        };

        xhr.onerror = function(){
            console.log(xhr.response)
        };

        xhr.send();
    
    });
}
getPosts(7).then(console.log);



