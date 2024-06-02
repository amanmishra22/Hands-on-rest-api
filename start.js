const express= require('express');
const Joi=require('joi');
const app=express();
app.use(express.json());

const customers=[
    {title: 'Ram', id: 1},
    {title: 'Shyam', id: 2},
    {title: 'Mohan', id: 3},
    {title: 'Sohan', id: 4}
]
app.get('/',(req,res)=>{
    res.send('Welcome');
});
app.get('/api/customers',(req,res)=>{
    res.send(customers);
});
app.get('/api/customers/:id',(req,res)=>{
     const customer=customers.find(c=>c.id===parseInt(req.params.id));
     if(!customer)res.status(404).send('<h2>Not found</h2>');
     res.send(customer);
});
function validateCustomer(customer){
    const schema={
        title:Joi.string().min(3).required()
    };
    return Joi.valid(customer,schema);
}
const port=5000;
app.listen(port,()=>console.log('Listening on port: ${port}'));

