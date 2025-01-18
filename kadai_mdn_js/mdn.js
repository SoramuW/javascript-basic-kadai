let today = new Date();

let getYear  = today.getFullYear();
let getMonth = today.getMonth() +1;
let getDate  = today.getDate();

// 年月日を日本語フォーマットに整形
let formattedDate = `${getYear}年${getMonth}月${getDate}日`;

// コンソールに表示
console.log(formattedDate);

// HTMLに挿入
document.getElementById('get_year').innerHTML = formattedDate;