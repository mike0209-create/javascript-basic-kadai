// ボタン要素とテキスト要素を取得
const button = document.getElementById("btn");
const text = document.getElementById("text");

// ボタンクリック時にテキストを変更
button.addEventListener("click", function() {
  text.textContent = "ボタンをクリックしました";
});
