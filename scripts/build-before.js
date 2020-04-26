const fs = require('fs');
const josnt = require('json-tranforms');

const rules = [
  jsont.pathRule(
    
  ),
  jsont.identity
];

module.exports = function(ctx) {
  console.log("In build preprocessing with context: ");
  console.log(ctx);
  const structure = JSON.parse(fs.readFileSync('./src/data/structure.json'));
  let structureWithContent = structure.map
  fs.writeFileSync('./src/data/structure-with-content.json', JSON.stringify(structure, null, 2), function(err){
    if (err) return console.log(err);
  });
};
