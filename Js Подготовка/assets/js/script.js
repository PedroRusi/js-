function js_style() {
    let text = document.getElementById('text')
    text.style.color = '#f45a27'
    text.style.fontSize = '30px'
    text.style.backgroundColor = 'green'
    text.style.border = '3px solid red'
    text.style.width = '400px'
    text.style.height = '200px'
}




function getFormvalue(event) {
    event.preventDefault();
    let form = document.forms[0];
    let Fname = form.elements.fname;
    let Lname = form.elements.lname;

    let text1 = document.createElement('p');
    text1.innerHTML = Fname.value + ' ' + Lname.value;
    form.appendChild(text1);
}



function getAttributes() {
    let link = document.getElementById('w3r');
    let parent = link.parentElement
    let textHref = document.createElement('p')
    textHref.innerText = link.href
    textHref.classList.add('textHref')
    parent.appendChild(textHref)
    let textHreflang = document.createElement('p')
    textHreflang.innerText = link.hreflang
    textHreflang.classList.add('textHreflang')
    parent.appendChild(textHreflang)
    let textRel = document.createElement('p')
    textRel.innerText = link.rel
    textRel.classList.add('textRel')
    parent.appendChild(textRel)
    let textType = document.createElement('p')
    textType.innerText = link.type
    textType.classList.add('textType')
    parent.appendChild(textType)
    let textTarget = document.createElement('p')
    textTarget.innerText = link.target
    textTarget.classList.add('textTarget')
    parent.appendChild(textTarget)
}



function insert_Row() {
    let table = document.getElementById('sampleTable')
    let tbody = table.children[0]
    let i = tbody.children.length
    tbody.insertAdjacentHTML('beforeend', `<tr class="table__row"><td>Row${i + 1} cell1</td><td>Row${i + 1} cell2</td></tr>`)
}



function changeContent() {
    let table = document.getElementById('myTable');
    let tbody = table.children[0]
    let row = prompt('Введите номер строки')
    let cell = prompt('Введите номер столбца')
    let value = prompt('Введите новое значение яйчейки')
    let tableRow = tbody.children[row - 1]
    let elem = tableRow.children[cell - 1]
    elem.innerText = value
}


function createTable() {
    let table = document.getElementById('myTable2');
    let row = prompt('Введите количество строк')
    let cell = prompt('Введите количество столбцов')
    let i = 1
    while (i <= row) {
        let tr = document.createElement('tr')
        let j = 1
        while (j <= cell) {
            let td = document.createElement('td')
            td.innerHTML = `Row${i} cell${j}`
            tr.appendChild(td)
            j++
        }
        table.appendChild(tr)
        i++
    }
}


function removecolor() {
    let select = document.getElementById('colorSelect')
    let i = select.selectedIndex
    let delOptions = select.value
    select.children[i].remove()
    select.insertAdjacentHTML('afterend', `<p>Элемент ${delOptions} удалён</p>`)
}



function getOptions() {
    let select = document.getElementById('mySelect')
    alert(`Выбран ${select.selectedIndex + 1} элемент со значением: ${select.value}`)
}


