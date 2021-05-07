db.createCollection("student");

db.createCollection("log",{capped: true, size: 1024, max: 10});

db.student.insertOne({name:"Marias dos Anjos"});

db.student.insertMany([{name:"Marias dos Anjos", subject: "Matemática", type: "Trabalho Pratico", value: 15.4},{name: "Marco Antonio", subject: "Portugues", type: "Prova Final", value: 23.8}]);

db.student.insert({name:"Pedro Augusto", subject: "Historia"});

db.student.insert([{name:"Pedro Augusto", subject: "Historia", type: "Trabalho Pratico", value: 17.5},{name:"Claudia Romualdo", subject: "Quimica", type: "Prova Final", value: 28.5}]);

================================
db.student.find();

db.student.find(query, projection);
db.student.find({},{_id:0, name:1, value:1});
db.student.find({},{_id:0, name:1, value:1}).limit(4);
db.student.find({},{_id:0, name:1, value:1}).limit(4).skip(1);
db.student.find({},{_id:0, name:1, value:1}).sort({name:1});
db.student.find().sort({value:-1});
db.student.find({},{_id:0, name:1, value:1}).sort({name:-1});
db.student.find({},{_id:0, name:1, value:1}).sort({name:-1}).skip(1);
db.student.find({},{_id:0, name:1, value:1}).sort({name:-1}).limit(3);
db.student.find().pretty();

db.student.findOne(query, projection);
db.student.findOne();

================================
db.student.insertMany([{name:"Victor Novaes", subject: "Portugues", type: "Trabalho Pratico", value: 15.8},{name:"Pedro Henrique", subject: "Fisica", type: "Prova Final", value: 12.9},{name:"Fernanda Tolentino", subject: "Matematica", type: "Trabalho Pratico", value: 19},{name:"Antonia Alvarenga", subject: "Historia", type: "Prova Intermediaia", value: 12},{name:"Gustavo Felipe Amorim", subject: "Quimica", type: "Prova Final", value: 10},{name:"Gustavo Felipe Amorim", subject: "Quimica", type: "Trabalho Pratico", value: 16}]);

db.student.find({$and:[{subject:"Quimica"},{type:"Prova Final"}]},{_id:0}).pretty();

db.student.find({QUERY},{_id:0}).pretty();

Operadores Logicos
$and:[{subject:"Quimica"},{type:"Prova Final"}]
$not:[{subject:"Quimica"},{type:"Prova Final"}]
$nor:[{subject:"Quimica"},{type:"Prova Final"}]
$or:[{subject:"Quimica"},{type:"Prova Final"}]

db.student.find({QUERY},{_id:0}).pretty();
Operadores Comparação
$eq:value:{$eq:23.8}
$gt:
$gte:
$in:subject:{$in:["Quimica","Matematica"]}
$lt:
$lte:
$ne:
$nin:
db.student.find({value:{$eq:23.8}},{_id:0}).pretty();

================================
db.COLLECTIONS.updateOne(query, update, options)

db.student.updateOne({name:"Ana Maria Silva", subject:"Portugues"}, {$set:{type:"Trabalho Pratico"}});

db.student.updateOne({name:"Pedro Augusto", subject:"Historia"}, {$set:{type:"Prova Final"}});

db.student.updateOne({name:"Pedro Augusto", subject:"Historia"}, {$inc:{value: 10}});

db.student.updateMany({query, update, options})

db.student.updateMany({subject:"Matematica", type:"Trabalho Pratico"}, {$inc:{value: 2}});

db.student.updateMany({},{$currentDate: {lastModified: true, timestamp: {$type: "timestamp"}}});

db.student.updateMany({},{$unset: {lastmodified: 1}});

db.student.replaceOne({query, update, options});

--ERRO no campo data
db.student.replaceOne({_id: ObjectId("607dfadcea223423afde51a2")},{name: "Lucas Pereira", subject: "Fisica", type: "Prova Final", value: 15.4, {$set: { lastModified: "$$NOW"}}});

================================
db.COLLECTIONS.deleteOne(query)
db.student.deleteOne({_id: ObjectId("607e0edaea223423afde51ad")});

db.student.deleteOne({subject: "Fisica"});

db.COLLECTIONS.deleteMany(filter)
.
db.student.deleteMany({subject: "Fisica"});

================================
db.COLLECTIONS.bulkWrite([Comando1, Comando2, ...],options);

db.student.bulkWrite([
{insertOne: {
	"document":{
		name:"Thiago Peixoto", 
		subject:"Fisica",
		type:"Prova Final",
		value:16,
		timestamp: new Date()
		}
	}
},
{insertOne: {
	"document":{
		name:"Patricia Rafaela", 
		subject:"Portugues",
		type:"Trabalho Pratico",
		value:21.3,
		timestamp: new Date()
		}
	}
},
{updateOne: {
	"filter":{
		name: "Marco Antonio"
		},
		update:{
			$set:{
				subject:"Historia"
			}
		}
	}
},
{deleteOne: {
	"filter":{
		name:"Pedro Augusto",
		type:"Trabalho Pratico",
		subject:"Historia"
		}
	}
},
{replaceOne: {
	"filter":{
		_id: ObjectId("607e0edaea223423afde51ac")
		},
		"replacement":{
			name:"Tais Bernardes",
			subject:"Fisica",
			type:"Trabalho Pratico",
			value: 12,
			lastModified: new Date()
		}
	}
}
], {ordered: false});

