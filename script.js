const menus = [];

for(let i = 1; i <= 4; i++) {
  let menu = document.getElementById(`menu${i}`);
  menus.push(menu);
}

console.log(menus);  // [#menu1, #menu2, #menu3, #menu4]

document.addEventListener('click', (value) => {
  
  console.log(value.target) //クリックした部分のDOM要素を取得できる
  console.log(value.target.id) //クリックした部分のidを取得できる
  
  menus.map((menu) => {
    if(value.target.id === menu.id) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
    }
  });
});