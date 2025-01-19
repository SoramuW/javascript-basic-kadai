// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);

// windowオブジェクトの中身を出力する
console.log(window);

// HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'));

// HTML要素をclassで取得し、中身を出力する
console.log(document.getElementsByClassName('heading'));

// 複数のHTML要素を取得し、定数に代入する
const headings = document.getElementsByClassName('heading');

// 複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
}

// HTML要素をCSSセレクタで取得し、中身を出力する（最初の1つ）
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

// HTML要素をCSSセレクタで取得し、中身を出力する（すべて）
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

// 新しくli要素を作成し、定数に代入する
const li = document.createElement('li');

// 作成したli要素にテキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3';

// ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);

/*******************************************************

// 複数のHTML要素を取得し、定数に代入する
const cssHeadings = document.querySelectorAll('.heading');
const cssLists = document.querySelectorAll('li');

// 複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < cssHeadings.length; i++) {
  console.log(cssHeadings[i]);
}
for (let i = 0; i < cssLists.length; i++) {
  console.log(cssLists[i]);
} 

// *textContent / innerHTMLプロパティ

// 新しくli要素を作成し、定数に代入する
const li = document.createElement('li');

// 作成したli要素にテキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3';
li.innerHTML = '<a href="#">JavaScriptで新しく作成したリスト3</a>';

// *appendChild()メソッド

// ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);

*メソッド	                    *処理の内容
getElementById()	        HTML要素をidで取得する
getElementsByClassName()	HTML要素をclassで取得する
querySelector()	            HTML要素をCSSセレクタで取得する（最初の１つ）
querySelectorAll()	        HTML要素をCSSセレクタで取得する（すべて）
createElement()	            HTML要素を新しく作成する
appendChild()	            HTML要素を子要素として末尾に追加する

*プロパティ	        *値
length	        文字列や配列の長さ
textContent	    HTML要素内のテキスト
innerHTML	    HTML要素内のテキスト（HTMLタグも可）

*************************************************************/