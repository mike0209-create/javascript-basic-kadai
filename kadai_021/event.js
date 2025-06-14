// HTML要素の取得
const btn = document.getElementById('btn');     // ボタン要素
const text = document.getElementById('text');   // 見出し要素

// ボタンクリックイベントの設定
btn.addEventListener('click', () => {
  // 2秒（2000ミリ秒）後にテキストを書き換える
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
