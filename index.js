const app = require('./src/app');
const PORT = 3000;
const startServerText = `Server started. URL: http://localhost:${ PORT }/`;

app.listen(PORT, () => console.log(startServerText));
