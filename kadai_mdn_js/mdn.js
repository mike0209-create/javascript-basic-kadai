function getToday() {
  const today = new Date();

  const year = today.getFullYear();       // 年（例：2025）
  const month = today.getMonth() + 1;     // 月（0〜11なので+1する）
  const day = today.getDate();            // 日

  // ゼロ埋めして2桁に整える
  const formatted = `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
  
  return formatted;
}

console.log(getToday());  // 例: 2025/05/31
