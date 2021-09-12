import express from 'express';
const port = process.env.PORT || 3000;
const app = express();


app.get('/', (req, res) => {
  res.send('<h1>HELLO FROM NODE APP</h1>')
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

