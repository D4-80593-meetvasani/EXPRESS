const express = require('express')
const path = require('path')

const homeRouter = require('./routes/home.router');
const membersRouter = require('./routes/members.router')

const app = express();

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))

const PORT = 3000;

app.use((req,res,next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}  ${req.url} ${delta}ms`);
})

app.use('/site',express.static(path.join(__dirname,'public')))
app.use(express.json());

app.get('/' ,(req,res) => {
    res.render('index',{
        title:'Pillar of Indian Chess !',
        caption: 'Write us at chessbaseindia@gmail.com',
    })
} )
app.use( '/members' , membersRouter);
app.use('/home' ,homeRouter)

app.listen(PORT , () => {
    console.log(`Listening on port ${PORT}...`);
})