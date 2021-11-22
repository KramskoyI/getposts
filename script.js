function getPosts(index){
    let xhr = new XMLHttpRequest();
    let url = new URL('https://jsonplaceholder.typicode.com/users')
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = function() {
        const mas = xhr.response;
        const mAs = mas.slice(0,index)
        console.log(mAs)
    };
    xhr.send();
 
}
getPosts(1);
