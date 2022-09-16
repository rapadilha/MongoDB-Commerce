db.produtos.deleteMany({ curtidas: { $lt: 100 } });
db.produtos.find();