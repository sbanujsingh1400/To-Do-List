/*

1. A minimal design with HTML and CSS, it should look nice (no libraries, no frameworks) -  DONE
2. A text box at the top to add a todo item to the list - DONE
3. Add button: when a user clicks on the button, add that todo item to the list - DONE
4. A delete button to delete the todo item completely from the list. - DONE
5. A checkbox to check the item off the list. (checked item should stay in the list, with some differentiation from rest of the todo items) -DONE COLOR ORANGE APPEARS ON CHECKED
6. Total number of tasks in the list. DONE
7. Extra points for creativity (think about user accessibility, some animations and things like that)- alert if input field is empty 



*/







//ALL REQUIRED VARIABLE/ARRAY
let toDoListsArr = [];
let counts = 0;
let tasksChecked = 0;


//ALL ELEMENTS 
let inputList = document.querySelector("#input-div input");
let addButton = document.querySelector("#input-div button");
let listContainer = document.querySelector("#lists-div");
let bottomDivPara = document.querySelector('#bottom-div p');
let bottomDivPara2 = document.querySelector('#bottom-div .checkedItems ');

//CLICK EVENT FOR ADDING TO DO LIST
addButton.addEventListener('click', function () {
    if (inputList.value == '') {
        alert("Please Enter Something")
        return false;
    }



    if (inputList.value == '') {
        alert("Please Enter Something")
        return false;
    }
    let val = inputList.value;
    let l = CreateList(inputList.value);
    listContainer.append(l);
    inputList.value = '';
    counts++;
    bottomDivPara.textContent = 'All Items: ' + counts;
    l.childNodes[2].addEventListener('click', (e) => {

        l.childNodes[2].parentElement.remove();
        if(l.childNodes[0].checked){
            tasksChecked--; 
            bottomDivPara2.textContent = 'Checked Tasks:' + tasksChecked;
        }
        counts--;
        bottomDivPara.textContent = 'All Items: ' + counts;
    })

    l.childNodes[0].addEventListener('click', (e) => {
        if (l.childNodes[0].checked) {
            tasksChecked++;
            bottomDivPara2.textContent = 'Checked Tasks:' + tasksChecked;
            l.childNodes[0].parentElement.style.backgroundColor = '#0BA34D'
        } else {
            tasksChecked--;
            bottomDivPara2.textContent = 'Checked Tasks:' + tasksChecked;
            l.childNodes[0].parentElement.style.backgroundColor = '#000000d3';
        }
    })


})

// ENTER KEY PRESS EVENT FOR ADDING TO DO LIST
inputList.addEventListener('keydown', (event) => {


    if (event.keyCode === 13) {

        if (inputList.value == '') {
            alert("Please Enter Something")
            return false;
        }
        let val = inputList.value;
        let l = CreateList(inputList.value);
        listContainer.append(l);
        inputList.value = '';
        counts++;
        bottomDivPara.textContent = 'All Items: ' + counts;
        l.childNodes[2].addEventListener('click', (e) => {

            l.childNodes[2].parentElement.remove();
            counts--;
            if(l.childNodes[0].checked){
                tasksChecked--; 
                bottomDivPara2.textContent = 'Checked Tasks:' + tasksChecked;
            }
            bottomDivPara.textContent = 'All Items: ' + counts;
        })

        l.childNodes[0].addEventListener('click', (e) => {
            if (l.childNodes[0].checked) {
                tasksChecked++;
                bottomDivPara2.textContent = 'Checked Tasks:' + tasksChecked;
                l.childNodes[0].parentElement.style.backgroundColor = '#0BA34D'
            } else {
                tasksChecked--;
                bottomDivPara2.textContent = 'Checked Tasks:' + tasksChecked;
                l.childNodes[0].parentElement.style.backgroundColor = '#000000d3';
            }
        })

    }
});


//DUNCTION FOR CREATING LIST ELEMENT
function CreateList(value) {

    let listDiv = document.createElement('div');
    listDiv.className = 'list';
    let inputElem = document.createElement('input');

    inputElem.type = 'checkbox';
    let labelElem = document.createElement('label');
    labelElem.textContent = value;
    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'button';
    buttonDiv.textContent = "x";
    listDiv.append(inputElem, labelElem, buttonDiv);
    return listDiv;
}