let form = document.forms.formNameValue;
let divPairList = document.getElementById('PairList');
let deleteBtn = document.getElementById('Delete');
let sortByName = document.getElementById('SortByName');
let arrNameValue = [];


// add
form.onsubmit = function (event) {
    divPairList.innerText = '';
    event.preventDefault();
    let ul = document.createElement('ul');
    let NameValue = this.NameValue.value;
    let matchNameValue = NameValue.match(/^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*/);
    let obj = {
        name: matchNameValue[1],
        value: matchNameValue[2]
    }
    arrNameValue.push(obj);
    console.log(obj);
    console.log(arrNameValue);
    for (const oneNameValue of arrNameValue) {
        let li = document.createElement('li');
        li.innerText = `${oneNameValue.name} = ${oneNameValue.value}`;
        ul.appendChild(li);
    }
    divPairList.appendChild(ul);

};

// delete
deleteBtn.onclick = function () {
    divPairList.innerText = '';
    arrNameValue = [];
};

// sort by name
sortByName.onclick = function (){
    arrNameValue.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (b.name > a.name) return -1;
        return 0;
    })
    renderNameValueList();
}

function renderNameValueList() {
    divPairList.innerText = '';
    let ul = document.createElement('ul');
    for (const pair of arrNameValue) {
        let li = document.createElement('li');
        li.innerText = `${pair.name} = ${pair.value}`;
        ul.appendChild(li);
    }
    divPairList.appendChild(ul);
}
