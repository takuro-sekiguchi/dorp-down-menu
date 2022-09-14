# ドロップダウンメニュー付きウェブサイト

[デモサイトはこちら](https://taku-web3.com/project/drop-down-menu/index.html)

## ■改めて学んだこと
- navのサブメニューの付け方


## JavaScript
```js 
const menus = [];

for(let i = 1; i <= 4; i++) {
  let menu = document.getElementById(`menu${i}`);
  menus.push(menu);
}

console.log(menus);  // [#menu1, #menu2, #menu3, #menu4]
```
menusという配列にmenuを追加する。
for文のiを1から始めることに注意する。
DOM操作とテンプレートリテラルを組み合わせることで、menu1~menu4を表す


```js
// クリックした時の処理を書く
document.addEventListener('click', (value) => {
  
  console.log(value.target) 　　//クリックした部分のDOM要素を取得できる
  console.log(value.target.id) //クリックした部分のidを取得できる
  
  menus.map((menu) => {
    //クリックした要素がmenu1~menu4のいずれかだった場合
    if(value.target.id === menu.id) {
      //個別のmenuに対してactiveクラスをつける。
      menu.classList.add('active');
    } else {
      //クリックした要素がmenu1~menu4以外の場合、menuに付与されているactiveクラスを解除する。
      menu.classList.remove('active');
    }
  });
});
```