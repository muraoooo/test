const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.');
const htmlFiles = files.filter(file => path.extname(file) === '.html' && file !== 'index.html');

// HTML用のリスト生成（スペースや日本語をURLエンコード）
const listItems = htmlFiles.map(file => {
  const encodedHref = encodeURI(file); // ←ここがポイント！
  return `<li><a href="${encodedHref}">${file}</a></li>`;
}).join('\n');

const htmlContent = `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>HTMLメモ一覧（自動生成）</title>
</head>
<body>
  <h1>📘 HTMLメモ一覧（自動生成）</h1>
  <ul>
    ${listItems}
  </ul>
</body>
</html>
`;

fs.writeFileSync('index.html', htmlContent);
