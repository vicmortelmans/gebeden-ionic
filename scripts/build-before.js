const fs = require('fs');
const jsont = require('json-transforms');
const md2json = require('md-2-json');

const rules = [
  jsont.pathRule(
    '.presentations', d => ({
      title: d.context.title,
      content: d.match.map((presentation) => {
        const markdown = fs.readFileSync('./src/data/markdown/' + presentation, 'utf8');
        const jsonc = md2json.parse(markdown);
        return jsonc;
      })
    })
  ),
  jsont.identity
];

module.exports = function(ctx) {
  console.log("In build preprocessing with context: ");
  console.log(ctx);
  const structure = JSON.parse(fs.readFileSync('./src/data/structure.json'));
  //let structureWithContent = jsont.transform(structure, rules);
  fs.writeFileSync(
    './src/data/structure-with-content.json', 
    //JSON.stringify(structureWithContent, null, 2), 
    function(err){
      if (err) return console.log(err);
    }
  );
};
