const express = require('express')
const app = express()
const PORT = 8000


app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'kanye ye west':{
        'age': 44,
        'birthName': 'Kanye Omari West',
        'birthLocation': 'Atlanta, Georgia'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    },
}


app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }

})
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})