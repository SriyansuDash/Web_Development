
import express from 'express';


const app = express();
app.use(express.json());


function isNeonNumber(num) {
  const square = num * num;
  let sum = 0;
  for (let digit of square.toString()) {
    sum += parseInt(digit);
  }
  return sum === num;
}


app.get('/check-neon/:num', (req, res) => {
  const num = parseInt(req.params.num);
  if (isNaN(num)) {
    res.status(400).send({ error: 'Invalid input. Please enter a number.' });
  } else if (isNeonNumber(num)) {
    res.send({ result: `${num} is a Neon number.` });
  } else {
    res.send({ result: `${num} is not a Neon number.` });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});