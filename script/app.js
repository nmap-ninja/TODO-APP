var input = document.getElementById("input");
var btn = document.getElementById("btn");
var div = document.querySelector(".userData");
let arr = [];

btn.addEventListener("click", () => {
  arr.push(input.value);
  arr.forEach((index, item) => {
    localStorage.setItem(index, item);
  });
});

//()=>{
// arr.push(input.value);
// var li = document.createElement("li");
// for(let i = 0; i < arr.length; i++){
//     li.innerHTML = localStorage.getItem(i, arr[i]);
//     localStorage.setItem(i, arr[i]);
// }
// li.addEventListener('click', () => {
//     li.classList.toggle('active');
// });
// div.appendChild(li);
//});

// function addToDo() {
//   arr.forEach((elem) => {
//     arr.push(elem);
//     arr.map;
//     var li = document.createElement("li");
//     li.innerHTML = elem;
//     div.appendChild(li);
//   });
// }

// const addToDo = () => {
//   //   arr.push(input.value);
//   let li = document.createElement("li");
//   arr.map((elem) => {
//     return (li.innerHTML = elem);
//   });
//   div.appendChild(li);
// };

// btn.addEventListener("click", addToDo);
