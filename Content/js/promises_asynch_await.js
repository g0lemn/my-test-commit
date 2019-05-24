// // setTimeout will play or act as server request
// // Uncomment code segments below per batch for testing.

const posts = [
    {
        title: 'Post One',
        body: 'This post is one'
    },
    {
        title: 'Post Two',
        body: 'This post is two'
    }
];

// // Function with Promise
function getPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`;
            });            

            const error = false;

            if (!error) {
                resolve(document.body.innerHTML = output);
            } else {
                reject('Reject: Something went wrong in getPost!');
            }
        }, 1000);
    });
}

// // Function with Promise
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post); 

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Reject: Something went wrong in createPost!');
            }
        }, 2000);
    });
}

// // Example #1 : Promise
// // For reference: https://javascript.info/promise-basics
// createPost(
//         {title: 'Post Three', body: 'This post is three'}
//     ).then(() => { 
//         getPosts().then(() => {
//             console.log('Complete!');
//         }).catch(err => console.log(err)) 
//     }).catch(err => console.log(err));

// //  Example #2 : Async / Await
// // Async declaration means initializing a class/function to allow await methods/func
// // Await method/func declares that no other function below it shall be called until the function is done 
// async function init() {
//     console.log('Casting await function');
//     await createPost({title: 'Post Three', body: 'This post is three'});
//     console.log('Done waiting');
//     await getPosts().then(() => { 
//         console.log('Done Promise getPosts!') 
//     }).catch(err => console.log(err));       
//     console.log('Done Init Func') 
// }
// init();

// // Example #3 : Promise.all
// // Executing multiple promise with a single resolve
// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye!'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));