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



function Calculate(event) {
    event.preventDefault();
    let result = document.createElement('p')
    result.classList.add('result')
    let form = document.forms[5]
    let sum = form.elements.select.value
    sum = Math.round(sum * (1 + 0.01 * form.elements.complexity.value))
    sum = sum * form.elements.range.value
    let radio = form.elements.radio
    for (let rad of radio) {
        if (rad.checked) {
            sum = sum * rad.value
        }
    }
    if (form.elements.check.checked) {
        sum = Math.round(sum * 0.85)
    } else {
        sum = Math.round(sum)
        
    }
    result.innerText = "Услуга будет стоить: " + sum
    if (form.lastElementChild.className != 'result') {
         form.appendChild(result)  
    } else {
        form.lastElementChild.innerHTML = result.innerHTML
    }
}




function addTable(event) {
    event.preventDefault();
    let form = document.forms.namedItem('table')
    let name = form.elements.firstname.value
    let lastname = form.elements.lastname.value
    let blockTable = document.getElementById('blockTable')
    let elem = document.createElement('div')
    elem.className = 'block__name'
    elem.classList.add('redact')
    elem.innerHTML = `<a class="first__name first">${name}</a><a class="last__name last">${lastname}</a>`
    blockTable.appendChild(elem)
    console.log(elem);
}


let BlockTable = document.getElementById('blockTable')
BlockTable.addEventListener('click', function(elem) {
    let target = elem.target.closest('.redact.first', 'redact.last')
    let firstname = target.firstElementChild.innerText
    let lastname = target.lastElementChild.innerText
    let area = document.createElement('textarea')
    area.value = firstname + lastname
    target.innerHTML = ''
    target.appendChild(area)
})
