let user = JSON.parse(localStorage.getItem('selectedUser'));

if (user) {
    let userDetailsDiv = document.getElementById('user-details');
    userDetailsDiv.innerHTML = `
    <h2 class="user-details-h2">All info about user ${user.id}</h2>
    <h4>Id: ${user.id}</h4>
    <p><b>Name:</b> ${user.name}</p>
    <p><b>Username:</b> ${user.username}</p>
    <p><b>Email:</b> ${user.email}</p>
     <p><b>Address:</b></p>
     <ul>
        <li><b>City:</b> ${user.address.city}</li> 
        <li><b>Street:</b> ${user.address.street}</li>
        <li><b>Suite:</b> ${user.address.suite}</li>
        <li><b>Zipcode:</b> ${user.address.zipcode}</li>
        <p><b>geo:</b></p>
        <ul>
            <li><b>lat:</b> ${user.address.geo.lat}</li>
            <li><b>lng:</b> ${user.address.geo.lng}</li>
        </ul>
     </ul>
    <p><b>Phone:</b> ${user.phone}</p>
    <p><b>Website:</b> ${user.website}</p>
    <p><b>Company:</b></p>
    <ul> 
        <li><b>Name:</b> ${user.company.name}</li>
        <li><b>catchPhrase:</b> ${user.company.catchPhrase}</li>
        <li><b>bs:</b> ${user.company.bs}</li>
    </ul>
    
    
    `
} else {
    document.getElementById('user-details').innerText = 'no user selected';
}

let button = document.getElementById('postOfCurrentUser');
let postTitlesDiv = document.getElementById('postTitles');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        button.onclick = function () {
            postTitlesDiv.innerText = '';
            let count = 1;
            for (const post of posts) {
                if (post.userId === user.id) {
                    let userDetailsDiv = document.createElement('div');
                    userDetailsDiv.classList.add('user-details-info')

                    let h4 = document.createElement('h4');
                    h4.innerText = `Title ${count}: ${post.title}`
                    h4.classList.add('user-details-h4')

                    let a = document.createElement('a');
                    a.classList.add('user-details-a')
                    a.innerText = 'show all info'
                    a.href = 'post-details.html';

                    a.onclick = function () {
                        localStorage.setItem('selectedPost', JSON.stringify(post));
                    };
                    userDetailsDiv.append(h4, a);
                    postTitlesDiv.appendChild(userDetailsDiv);
                    count++;
                }
            }
        }
    });
