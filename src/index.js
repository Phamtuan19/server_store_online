import express from 'express';

const app = express();
const PORT = 8017;

app.listen(PORT, () => {
   // eslint-disable-next-line no-console
   console.log(`[SUCCESS] ::: Server is listening on port: ${PORT}`);
});
