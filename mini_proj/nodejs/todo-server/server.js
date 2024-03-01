const express = require('express');
const cors = require('cors')
const db = require('./db')
const PORT = 5000;
const bodyParser = require('body-parser');
const routeTodo = require('./routes/todo');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors('*'));

app.use('/todo', routeTodo);

app.get('/', (req,resp) => {
  resp.send({
    ms_response : {
      status: true,
      message: 'Successfully Tested',
    },
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});