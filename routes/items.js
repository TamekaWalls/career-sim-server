const router = require('express').Router();
const db = require('../config/connection')

router.get("/",async(req, res)=>{
  try {
    const result=await db.query("SELECT * FROM products")
    res.json(result.rows)
  } catch (error) {
    console.log(error)
    res.status(500).json("Internal Error")
  }
})

router.get("/:itemId", async(req,res)=>{
  try {
    const result=await db.query("SELECT * FROM products WHERE id=$1",[req.params.itemId])
    res.json(result.rows[0])
  } catch (error) {
    console.log(error)
    res.status(500).json("Internal Error")
  } 
})

module.exports = router;