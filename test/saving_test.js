const assert = require('assert')
const Mariochar = require('../models/mariochar');

describe('Saving Record',function(){
  it('Saves a records to the database',function(done){
    var char = new Mariochar({
      name:'Mario'
    })

char.save().then(function(){
  assert(char.isNew === false)
  done();
})

  })

})

















// const assert = require('assert');
// const MarioChar = require('../models/mariochar');

// describe('Saving records', function(){

//   it('Saves a record to the database', function(done){

//     const char = new MarioChar({
//       name: 'Mario'
//     });

//     char.save().then(function(){
//       assert(!char.isNew);
//       done();
//     });

//   });

// });
