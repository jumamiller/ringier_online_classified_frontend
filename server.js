const history = require('connect-history-api-fallback');
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const app = express();
app.use(history());
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = import.meta.env.VITE_PORT || 5000;
app.listen(port);