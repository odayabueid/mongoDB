const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

before(function(done){
    mongoose.connect('mongodb://localhost/testaroo')
    mongoose.connection.once('open',function(){
        console.log("Connection has been made, now made fire works..")
        done()
    }).on('error',function(error){
        console.log('connection error')
    })

})

// Drop the charachter using before Each

beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function(){
        done()
    })
})
