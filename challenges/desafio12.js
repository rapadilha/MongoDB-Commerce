db.produtos.updateMany({ 
  nome: { $ne: "McChicken" }, 
ingredientes: { 
  $not: { $in: ["ketchup"] }, 
} }, 
{ $push: 
  { ingredientes: "ketchup" }, 
});
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });