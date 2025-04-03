const express = require("express");  
const { fetchExpenses, addExpenses, deleteExpenses } = require("../Controllers/ExpenseController");
const router = express.Router();     

//fetch all expenses all user 
router.get('/',fetchExpenses);
//add expenses 
router.post('/',addExpenses);
//delete expenses
router.delete('/:expenseId',deleteExpenses);


module.exports = router;
