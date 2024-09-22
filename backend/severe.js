const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Server Started at port no. 3000")
});

app.get('/', (request,response) => {
    response.send("hello Jee , kaise ho saaare");
})

app.post('/api/cars', (request,response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car  Submitteed Successfully.");
})