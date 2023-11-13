const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        console.log(date.getDate(), new Date().getMonth(), new Date().getFullYear())
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});

const header = document.getElementById('calendar-header')
const weeks = document.querySelector('.weeks')
const days = document.querySelector('.days')

days.style.height = 'calc(100% - ' + (header.clientHeight + weeks.clientHeight) + 'px)'


const dropdown = document.querySelector('.dropdown');
dropdown.style.height = '0px';

function operateDropdown(){
    if(dropdown.style.height === '0px'){
        dropdown.style.height = dropdown.scrollHeight + 'px';
    } else{
        dropdown.style.height = '0px';
    }
}

const categorySelector = document.getElementById('category-selector');

categorySelector.addEventListener('click', operateDropdown);

const categories = document.querySelectorAll('.category');
categories.forEach(function(category) {
    category.addEventListener('click', (e) => {
        let category = e.target.innerHTML;
        categorySelector.innerHTML = category;
        operateDropdown();
    });
});





// date thing
// start with month
const monthField = document.querySelectorAll('.month');
monthField.forEach(function(month) {
    month.addEventListener('input', (e) => {
        if(e.target.innerHTML.length > 0){
            e.target.style.fill = "red"
        }
        if(e.target.innerHTML.length >= 2){
            if(e.target.innerHTML < 1 || e.target.innerHTML > 12 || isNaN(e.target.innerHTML) || e.target.innerHTML.length > 2){
                e.target.innerHTML = '';
            } else{
                // field looks good
                e.target.nextElementSibling.focus();
            }
        }
    })
})