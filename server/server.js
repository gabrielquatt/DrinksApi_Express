const express = require ('express');
const apiRouter = require("./routes");
const cors = require('cors');

const app = express();
const corsOptions = {
    origin: '*'
}

app.use(express.json());

app.use('/api/drink', cors(corsOptions), apiRouter)

app.listen(process.env.PORT || '8000', () => {

    console.log(`Server is running on port ${process.env.PORT || '8000'}`);

});