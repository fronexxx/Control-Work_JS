let post = JSON.parse(localStorage.getItem('selectedPost'));

if (post) {
    let postDetailsDiv = document.getElementById('post-details');
    postDetailsDiv.innerHTML = `
    <h2 class="post-details-h2">All info about post ${post.id}</h2>
    <h4>Title: ${post.title}</h4>
    <p>User Id: ${post.userId}</p>
    <p>Id: ${post.id}</p>
    <p>Body: ${post.body}</p>
    <hr>
    `
} else {
    document.getElementById('post-details').innerText = 'no post selected'
}

let postCommentsDiv = document.getElementById('postComments');
fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((comments) => {
        for (const comment of comments) {
            if (comment.postId === post.id) {
                let infoDiv = document.createElement('div');
                infoDiv.classList.add('infoDiv')
                infoDiv.innerHTML = `
                    <h4>Post id: ${post.id}</h4>
                    <p>Id: ${comment.id}</p>
                    <p>Name: ${comment.name}</p>
                    <p>Email: ${comment.email}</p>
                    <p>Body: ${comment.body}</p>
                    
                    
                    
                    `

                postCommentsDiv.appendChild(infoDiv);
            }
        }
    });
