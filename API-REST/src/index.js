const cors = require('cors')
const express = require('express');
const {getIssues} = require('./controllers/comicReq')
const app = express();
const port = 3000;

app.use(cors())
// Middleware para manejar datos JSON
app.use(express.json());

// Rutas
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
  
});
app.get('/comics',async(req,res)=>{
  try {
    const data = await getIssues(); // Llama a la función asíncrona
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

