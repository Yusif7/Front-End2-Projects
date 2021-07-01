let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter');



//Item Count

const itemCount = (list) => {
    let count = document.querySelector('#work__count');
    let childCount = list.children.length;
    count.children[0].textContent = childCount;
}

//Add work
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = document.querySelector('#item').value;
    if (value.length == 0) {
        return 0
    }
    let li = document.createElement('li');
    li.className = 'work__item';
    let a = document.createElement('a');
    a.textContent = value;
    li.appendChild(a);
    let btnArr = ['update', 'delete'];
    for (let i = 0; i < btnArr.length; i++) {
        let btn = document.createElement('button');
        btn.className = `${btnArr[i]}__btn`;
        btn.textContent = btnArr[i];
        li.appendChild(btn)
    }
    itemList.appendChild(li);
    itemCount(itemList);
})

//Delete/Update
itemList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete__btn')) {
        if (confirm('Silmek istediyinden eminsen?')) {
            let elem = e.target.parentElement;
            itemList.removeChild(elem);
            itemCount(itemList);
        }
    } else if (e.target.classList.contains('update__btn')) {
        let newValue = prompt('Yeni is elave edilsin:');
        e.target.previousElementSibling.textContent = newValue;
    }
})


//Filter

filter.addEventListener('keyup', (e) => {
    let text = e.target.value.toLowerCase();
    let items = itemList.querySelectorAll('.work__item');
    items.forEach((item) => {
        let first = item.firstChild.textContent;
        if (first.toLowerCase().includes(text) != false) {
            item.style.opacity = 1;
        } else {
            item.style.opacity = 0;
            itemCount();
        }
    })
})