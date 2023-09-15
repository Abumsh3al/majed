const header = document.getElementById("heder_btn");
const home_btn = document.getElementById("home_btn");
const vig1 = document.getElementById("vig");
const order_btn = document.getElementById("order_btn");
const supermarct = document.getElementById("supermarct");

function vig(){
    home_btn.style.display="none";
    vig1.style.display="flex"
}
function menu() {
    header.style.display="flex";
    home_btn.style.display="flex";
    vig1.style.display="none";
    order_btn.style.display="none";
}
function order() {
    home_btn.style.display="none";
    vig1.style.display="none";
    header.style.display="none";
    supermarct.style.display="none";
    order_btn.style.display="flex";
}
function upermarct_btn() {
    home_btn.style.display="none";
    vig1.style.display="none";
    order_btn.style.display="none";
    header.style.display="flex";
    supermarct.style.display="flex";
}




var rowCount = 0; // عدد الصفوف الحالية
// دالة حذف الصف
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}





// الاضافة للجدول


function addRow(button) {
    var outputDiv = document.getElementById("output");
    var buttonValues = {};
    var buttonText = button.textContent;

    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td class="col-span-5 text-center border-b py-4">${buttonText}</td>
        <td class="col-span-2 text-center border-b py-4">1</td>
        <td class="col-span-2 text-center border-b py-4 flex justify-center">
        <button onclick="deleteRow(this)" >
        <svg
        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path
        d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
        
        </svg>
        
        </button>
        </td>
    `;

    var tableBody = document.querySelector("tbody");
    tableBody.appendChild(newRow);
}




function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


// حذف القائمة 
function deletList(button) {
    var tableBody = document.querySelector("tbody");
    tableBody.innerHTML = ""; // حذف كل محتوى الجدول
    
}






// اعداد الطلبات

function n_tm() {
    var number_cart = document.getElementById("number_cart");
    buttonText
}
