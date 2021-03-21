const fs = require('fs');
const path = require('path');

const exclusionList = ['SvgIcon', 'index.ts', 'utils'];

const files = fs.readdirSync(path.resolve(process.cwd(), `./src`));

const data = {
  Icons: files
    .filter((file) => !exclusionList.includes(file))
    .map((file) => file.replace('.tsx', '')),
};

fs.writeFileSync('./docs/manifest.json', JSON.stringify(data, null, '    '));
