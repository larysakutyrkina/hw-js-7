/*Я добавила стилей, чтобы результат был по-живее*/

function showListOnPage (items, parent) {

    const list = items.map( item => {
        const listElements = document.createElement("li");

        listElements.style.fontWeight = "bold";
        listElements.style.paddingTop = "10px";
        listElements.style.fontSize = "30px";

        listElements.textContent = item;

        return listElements;
    })

    const ulElements = document.createElement("ul");

    ulElements.style.border = "5px solid teal";
    ulElements.style.background = "lavender";

    ulElements.append(...list);

    if(parent){
        parent.append(ulElements);
    } else {
        document.body.append(ulElements);
    }
}

showListOnPage(["Born to die", "Off to the races", "Blue Jeans", "Video Games", "Diet Mountain Dew", "National Anthem"]);