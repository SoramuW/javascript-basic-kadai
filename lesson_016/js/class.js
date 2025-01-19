// クラスを定義する
class Product {
    // コンストラクタを使ってインスタンス化するときに初期化する
    constructor(name, price, category) {
      // インスタンス（オブジェクト）にプロパティを持たせる
      this.name = name;
      this.price = price;
      this.category = category;
    }
  
    // メソッドを定義する
    describe() {
      console.log('この商品名は' + this.name + 'です。');
    }
  }
  
  // インスタンス化する
  const shampoo = new Product('シャンプー', 500, '生活雑貨');
  const coffee = new Product('コーヒー', 1500, '飲料');
  
  // インスタンス（オブジェクト）の値を出力する
  console.log(shampoo);
  console.log(coffee);
  
  // メソッドを呼び出す（実行する）
  shampoo.describe();

  // 通常のオブジェクトにメソッドを定義する
const user = {
    name: '侍太郎',
    age: 36,
    gender: '男性',
    greet: () => {
      console.log('よろしくお願いします！');
    }
  }
  
  // メソッドを呼び出す（実行する）
  user.greet();

/********************

// クラスの定義
class クラス名 {
  // コンストラクタの定義
  constructor() {
    初期化の内容
  }
  
  // メソッドの定義
  メソッド名() {
    一連の処理
  }
}

// インスタンス化
const 定数名 = new クラス名();

// メソッドの呼び出し
定数名.メソッド名();

// メソッドの定義（通常のオブジェクト）
const 定数名 = {
  キー名（メソッド名） : () => {
    一連の処理
  }
}

*/
