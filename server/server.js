const express = require ('express');
const apiRouter = require("./routes");
const cors = require('cors');

const app = express();
const corsOptions = {
    origin: '*'
}

app.use(express.json());

app.use('/api/drink', cors(corsOptions), apiRouter)

app.listen(process.env.PORT || '4000', () => {

    console.log(`Server is running on port ${process.env.PORT || '8000'}`);

});

/**
 * para iniciar api.
 * @npm run dev
 * 
 * @soluccion_a : error al intentar montar react + api
 * echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
 */