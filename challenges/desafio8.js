db.produtos.deleteMany({ curtidas: { $lt: 100 } });
db.produtos.find({}, { _id: 0, nome: 1 });