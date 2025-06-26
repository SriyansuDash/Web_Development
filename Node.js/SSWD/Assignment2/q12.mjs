
import express from 'express';
const app = express();
app.use(express.json());

function processData(data, callback) {
  
  setTimeout(() => {
    const result = data * 2;
    callback(null, result); 
  }, 2000);
}


app.get('/process/:num', (req, res) => {
  const num = parseInt(req.params.num);
  if (isNaN(num)) {
    res.status(400).send({ error: 'Invalid input. Please enter a number.' });
  } else {
    processData(num, (error, result) => {
      if (error) {
        res.status(500).send({ error: 'Internal Server Error' });
      } else {
        res.send({ result: `Processed data: ${result}` });
      }
    });
  }
});


function processDataWithError(data, callback) {

  setTimeout(() => {
    if (data < 0) {
      callback(new Error('Data cannot be negative'), null);
    } else {
      const result = data * 2;
      callback(null, result);
    }
  }, 2000);
}

app.get('/process-with-error/:num', (req, res) => {
  const num = parseInt(req.params.num);
  if (isNaN(num)) {
    res.status(400).send({ error: 'Invalid input. Please enter a number.' });
  } else {
    processDataWithError(num, (error, result) => {
      if (error) {
        res.status(400).send({ error: error.message });
      } else {
        res.send({ result: `Processed data: ${result}` });
      }
    });
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});