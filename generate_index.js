const fs = require("fs");
const path = require("path");

const outputFile = path.join(__dirname, "index.html");
const files = fs.readdirSync(__dirname).filter(file =>
  file.endsWith(".html") && file !== "index.html"
);

const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>📘 HTMLメモ一覧（自動生成）</title>
</head>
<body>
  <h1>📘 HTMLメモ一覧（自動生成）</h1>
  <ul>
    ${files.map(file => `<li><a href="${file}">${file}</a></li>`).join("\n    ")}
  </ul>
</body>
</html>`;

fs.writeFileSync(outputFile, html);
console.log(\`✅ index.html generated with \${files.length} entries.\`);
