'use strict';

const app = require('./app');

const PORT =  9000; //process.env.PORT ||

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
