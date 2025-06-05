let user = JSON.parse(localStorage.getItem('selectedUser'));

if (user) {
    let userDetailsDiv = document.getElementById('user-details');
    userDetailsDiv.innerText = '';

    let h2 = document.createElement('h2');
    h2.className = 'user-details-h2';
    h2.innerText = `All info about user ${user.id}`;

    let h4 = document.createElement('h4');
    h4.innerText = `Id: ${user.id}`;

    let nameP = document.createElement('p');
    nameP.innerText = `Name: ${user.name}`;

    let usernameP = document.createElement('p');
    usernameP.innerText = `Username: ${user.username}`;

    let emailP = document.createElement('p');
    emailP.innerText = `Email: ${user.email}`;

    let addressTitle = document.createElement('p');
    addressTitle.innerText = 'Address:';

    let addressList = document.createElement('ul');

    let cityLi = document.createElement('li');
    cityLi.innerText = `City: ${user.address.city}`;

    let streetLi = document.createElement('li');
    streetLi.innerText = `Street: ${user.address.street}`;

    let suiteLi = document.createElement('li');
    suiteLi.innerText = `Suite: ${user.address.suite}`;

    let zipcodeLi = document.createElement('li');
    zipcodeLi.innerText = `Zipcode: ${user.address.zipcode}`;

    let geoTitle = document.createElement('p');
    geoTitle.innerText = 'Geo:';

    let geoList = document.createElement('ul');

    let latLi = document.createElement('li');
    latLi.innerText = `Lat: ${user.address.geo.lat}`;

    let lngLi = document.createElement('li');
    lngLi.innerText = `Lng: ${user.address.geo.lng}`;

    geoList.append(latLi, lngLi);
    addressList.append(cityLi, streetLi, suiteLi, zipcodeLi, geoTitle, geoList);

    let phoneP = document.createElement('p');
    phoneP.innerText = `Phone: ${user.phone}`;

    let websiteP = document.createElement('p');
    websiteP.innerText = `Website: ${user.website}`;

    let companyTitle = document.createElement('p');
    companyTitle.innerText = 'Company:';

    let companyList = document.createElement('ul');

    let companyName = document.createElement('li');
    companyName.innerText = `Name: ${user.company.name}`;

    let catchPhrase = document.createElement('li');
    catchPhrase.innerText = `CatchPhrase: ${user.company.catchPhrase}`;

    let bs = document.createElement('li');
    bs.innerText = `BS: ${user.company.bs}`;

    companyList.append(companyName, catchPhrase, bs);

    userDetailsDiv.append(h2, h4, nameP, usernameP, emailP, addressTitle, addressList, phoneP, websiteP, companyTitle, companyList);
}else {
    document.getElementById('user-details').innerText = 'no user selected';
}

let button = document.getElementById('postOfCurrentUser');
let postTitlesDiv = document.getElementById('postTitles');

button.onclick = function () {
    postTitlesDiv.innerText = '';
    let url = new URL('https://jsonplaceholder.typicode.com/posts');
    url.searchParams.set('userId', user.id);

    fetch(url)
        .then((response) => response.json())
        .then((posts) => {
            let count = 1;
            for (const post of posts) {
                let userDetailsDiv = document.createElement('div');
                userDetailsDiv.classList.add('user-details-info');

                let h4 = document.createElement('h4');
                h4.innerText = `Title ${count}: ${post.title}`;
                h4.classList.add('user-details-h4');

                let a = document.createElement('a');
                a.classList.add('user-details-a');
                a.innerText = 'show all info';
                a.href = 'post-details.html';

                a.onclick = function () {
                    localStorage.setItem('selectedPost', JSON.stringify(post));
                };

                userDetailsDiv.append(h4, a);
                postTitlesDiv.appendChild(userDetailsDiv);
                count++;
            }
        });
};
