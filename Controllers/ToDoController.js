const ToDoModel=require('../Models/ToDoSchema');

const getToDo= async(req,res)=>{
    try{
    const toDo=await ToDoModel.find();
    if(toDo.length==0){
        return res.status(400).json({message:"No To Do Found"});
        
    }
    res.send(toDo);

}catch(err){
    return res.status(500).json({ message: "Internal server error" });
}};

const createToDo= async(req,res)=>{
    try{
        const {text}=req.body;
        const toDo=await ToDoModel.create({text}).then((date)=>{
            console.log("Addded successfully");
            console.log(date);
            res.send(date);
        });
}catch(err){
    return res.status(500).json({ message: "err in creating"});
}};

const updateToDo= async(req,res)=>{
    try{
        const {id}=req.params;
        const uptext=req.body;
        const toDo= await ToDoModel.findByIdAndUpdate(id,uptext,{
            new:true,
            runValidators:true
        });
        if(!toDo){
            return res.status(400).json({message:"No To Do Found"});
        }
        
        res.status(200).json(toDo);
    }catch(err){
        return res.status(500).json({ message: "err in creating"});
    }
};

//delete the todo
const deleteToDo= async(req,res)=>{
    try{
        const {id}=req.params;
        const todo= await ToDoModel.findByIdAndDelete(id);
        if(!todo){
            return res.status(400).json({message:"No To Do Found"});
        }
        res.status(200).json({message:"Deleted Successfully"});

    }catch(err){
        return res.status(500).json({ message: "err in creating"});
    }
}

module.exports ={ getToDo,createToDo,updateToDo,deleteToDo};