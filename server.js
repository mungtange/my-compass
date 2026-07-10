const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 모든 요청을 public 폴더로
app.use(express.static(path.join(__dirname, 'public')));

// SPA 대비 (모든 경로를 index.html로)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`🧭 나침반 앱이 http://localhost:${port} 에서 실행 중!`);
});