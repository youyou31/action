const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello DevOps!'));
app.listen(port, () => console.log(`Écoute sur le port ${port}`));
