const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  const submissionText = JSON.stringify(formData, null, 2);

  fs.appendFile('submissions.txt', submissionText + '\n', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.status(500).send('Error submitting form');
    } else {
      console.log('Form submitted and saved to submissions.txt');
      res.status(200).send('Form submitted successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
