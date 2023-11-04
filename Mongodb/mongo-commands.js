db.usersList.insert(
    [
        {
          id: "1",
          name: "John Wick",
          age: "49",
        },
      ]
)

db.usersList.find().pretty();

db.usersList.findOne({id:'1'})

db.usersList.update({name:'John Wick'}, {$set: {name: 'John cena'}});

db.usersList.deleteOne({id:'1'})
