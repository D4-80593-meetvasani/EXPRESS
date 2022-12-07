const path = require('path');// 

function getMessages(req,res) {
   
    // res.send('<ul><li>Hello here is Sagar Shah , founder of Chessbase India ! </li></ul>')
    // res.sendFile(path.join(__dirname,'..','public','images','skimountain.jpg'))
    res.render('home',{
        title: 'Welcome to Chessbase India',
        member: 'Gukesh D.',
    })
}

function postMessage(req,res) {
    console.log('You can write to us on chessbaseindia@gmail.com');
}


module.exports = {
    getMessages,
    postMessage,
};