let nameIdDiv = document.getElementById('name_id');


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user-div')

            let h4 = document.createElement('h4');
            h4.innerText = `id: ${user.id}`;
            h4.classList.add('first-h4');
            let p = document.createElement('p');

            p.innerText = `Name: ${user.name}`;
            let a = document.createElement('a');

            a.innerText = 'show all info';
            a.href = 'user-details.html';
            a.onclick = function () {

                localStorage.setItem('selectedUser', JSON.stringify(user));
            };
            let hr = document.createElement('hr');

            userDiv.append(h4, p, a, hr);
            nameIdDiv.appendChild(userDiv);
        }
    });


