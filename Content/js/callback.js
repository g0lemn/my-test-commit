// // setTimeout will play or act as server request
// // Uncomment test code segments below one by one for testing.

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

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
        console.log('Append posts!');
    }, 1000);
}

// // No Callback function
function createPost1(post) {
    setTimeout(() => {
        posts.push(post); 
        console.log('Created new post!');
    }, 2000);
}

// // With callback function
function createPost2(post, callback) {
    setTimeout(() => {
        posts.push(post); 
        console.log('Created new post!');
        callback();  
    }, 2000);
}

// // Test #1 : No callback function
// // Calling create post first before get posts
// createPost1({title: 'Post Three', body: 'This post is three'});
// getPosts();

// // Test #2 : No callback function
// // Calling create post after get posts
// getPosts();
// createPost1({title: 'Post Three', body: 'This post is three'});

// // Test #3 : With callback function
// // This test shows how a callback can affect 
//createPost2({title: 'Post Three', body: 'This post is three'}, getPosts);