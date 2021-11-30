function getPosts(limit) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        const url = `https://jsonplaceholder.typicode.com/users?_limit=${limit}`;
        xhr.open('GET', url);
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
getPosts(6).then(console.log);



