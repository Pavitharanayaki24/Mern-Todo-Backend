const express= require('express');
const router=express.Router();
const toDOrouter=require('../Controllers/ToDoController');

router.get('/get', toDOrouter.getToDo);
router.post('/save', toDOrouter.createToDo);
router.put('/update/:id', toDOrouter.updateToDo);
router.delete('/delete/:id', toDOrouter.deleteToDo);


module.exports = router;