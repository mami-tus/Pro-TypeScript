const d = new Date();
console.log(d); // 現在の日時と時間が表示される

// 日時データの中身を取得する
console.log(d.getFullYear()); // 2024
console.log(d.getMonth()); // 1 (0から始まる)

// 日時データの書き換え
console.log(d.setFullYear(2030));
console.log(d.getFullYear()); // 2030
