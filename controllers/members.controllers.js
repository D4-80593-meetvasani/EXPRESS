const model = require('../models/members.model')


function postMember(req,res)  {

    if(!req.body.name){
        res.status(400).json({
            error: 'Missing member name ! '
        })
    }

    const newMember ={
        name: req.body.name,
        id : model.length
    };

    model.push(newMember);

    res.json(newMember);


}

function getMembers (req,res)  {
    res.json(model);
}

function getMember (req,res) {
    const memberId = Number(req.params.memberId );
    const member = model[memberId]
    if(member){
        res.status(200).json(member);
    }else{
        res.status(404).json({
            error : "Member does nor exist !"
        });
    }
}

module.exports = {
    postMember,
    getMember,
    getMembers
}