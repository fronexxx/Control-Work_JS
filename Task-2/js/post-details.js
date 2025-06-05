let post = JSON.parse(localStorage.getItem('selectedPost'));

if (post) {
    let postDetailsDiv = document.getElementById('post-details');
     let div = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerText = `All info about post ${post.id}`
    h2.classList.add('post-details-h2');

    let h4 = document.createElement('h4');
    h4.innerText = `Title: ${post.title}`;

    let pUserId = document.createElement('p');
    pUserId.innerText = `User Id: ${post.userId}`;

    let pId = document.createElement('p');
    pId.innerText = `User Id: ${post.id}`;

    let pBody = document.createElement('p');
    pBody.innerText = `Body: ${post.body}`;

    div.append(h2, h4, pUserId, pId, pBody);
    postDetailsDiv.appendChild(div);

} else {
    document.getElementById('post-details').innerText = 'no post selected'
}


let postCommentsDiv = document.getElementById('postComments');
let url = new URL('https://jsonplaceholder.typicode.com/comments');
url.searchParams.set('postId', post.id);

fetch(url)
    .then((response) => response.json())
    .then((comments) => {
        for (const comment of comments) {
            let infoDiv = document.createElement('div');
            infoDiv.classList.add('infoDiv');

            let h4 = document.createElement('h4');
            h4.innerText = `Post id: ${post.id}`;

            let pId = document.createElement('p');
            pId.innerText = `Id: ${comment.id}`;

            let pName = document.createElement('p');
            pName.innerText = `Name: ${comment.name}`;

            let pEmail = document.createElement('p');
            pEmail.innerText = `Email: ${comment.email}`;

            let pBody = document.createElement('p');
            pBody.innerText = `Body: ${comment.body}`;

            infoDiv.append(h4, pId, pName, pEmail, pBody);
            postCommentsDiv.appendChild(infoDiv);
        }
    });
