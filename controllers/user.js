const { result } = require('lodash');
const user=require('../models/user');

exports.addUser=(req,res,next)=>{
    user.create({
        name:req.body.name,
        age:req.body.age,
        mailid:req.body.mailid
    }).then(result=>{
        console.log(result.dataValues);
        res.json(result);
    })
    .catch(err=>console.log(err));
}

exports.getUsers=(req,res,next)=>{
    user.findAll().then(result=>{
        console.log(result);
        res.json(result);
    })
    .catch(err=>console.log(err));
}

exports.getUserById=(req,res,next)=>{
    user.findByPk(req.params.userid).then((result)=>{
        console.log(result);
        res.json(result);
    })
    .catch(err=>console.log(err));
}

exports.deleteUser=(req,res,next)=>{
    user.findByPk(req.params.userid).then((result)=>{
        return result.destroy();
    }).then(result=>{
        console.log("deleted user Successfully");
        res.json({});
    }).catch(err=>console.log(err));
}
exports.updateUser=(req,res,next)=>{
    user.findByPk(req.params.userid).then((result)=>{
        result.name=req.body.name;
        result.age=req.body.age;
        result.mailid=req.body.mailid;
        return result.save();
    }).then(result=>{
        console.log("Updated user Successfully");
        res.json(result);
    }).catch(err=>console.log(err));
}