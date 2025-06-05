let form = document.forms.formNameValue;
let divPairList = document.getElementById('PairList');
let deleteBtn = document.getElementById('Delete');
let sortByName = document.getElementById('SortByName');
let sortByValue = document.getElementById('SortByValue');
let pError = document.getElementById('error');
let arrNameValue = [];



// add
form.onsubmit = function (event) {

    event.preventDefault();
    let NameValue = this.NameValue.value;
    let matchNameValue = NameValue.match(/^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*/);
    if (!matchNameValue) {
        pError.innerText = 'Please enter correct form!!! Example: asd=123'
    }else{
        pError.innerText = '';
    }
    let obj = {
        name: matchNameValue[1],
        value: matchNameValue[2]
    };
    arrNameValue.push(obj);

    renderNameValueList()

    this.NameValue.value = '';

};

// delete
let selectedIndexes = [];
deleteBtn.onclick = function () {
    if (selectedIndexes.length > 0) {
        selectedIndexes.sort((a, b) => b - a).forEach(index => {
            arrNameValue.splice(index, 1);
        });
        selectedIndexes = [];
        renderNameValueList();
    } else {
        arrNameValue = [];
        divPairList.innerText = '';
    }
};

function renderNameValueList() {
    divPairList.innerText = '';
    let ul = document.createElement('ul');

    arrNameValue.forEach((value, index) => {
        let li = document.createElement('li');
        li.innerText = `${value.name} = ${value.value}`;
        li.style.cursor = 'pointer';
        li.style.padding = '5px';


        if (selectedIndexes.includes(index)) {
            li.style.backgroundColor = 'lightblue';
        }


        li.onclick = function () {
            if (selectedIndexes.includes(index)) {
                selectedIndexes = selectedIndexes.filter(i => i !== index);
            } else {
                selectedIndexes.push(index);
            }
            renderNameValueList();
        };

        ul.appendChild(li);
    });

    divPairList.appendChild(ul);
}




sortByName.onclick = function (){
    arrNameValue.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (b.name > a.name) return -1;
        return 0;
    })
    renderNameValueList();
}

// sort by value
sortByValue.onclick = function () {
    arrNameValue.sort((a, b) => {
        let aValue = parseInt(a.value);
        let bValue = parseInt(b.value);

        let aIsNum = typeof aValue === 'number' && !isNaN(aValue);
        let bIsNum = typeof bValue === 'number' && !isNaN(bValue);

        if (aIsNum && bIsNum) {
            return aValue - bValue;
        }else if (a.value > b.value) {
            return 1;
        }else if (b.value > a.value) {
            return -1;
        } else {
            return 0;
        }

    })
    renderNameValueList();
};

