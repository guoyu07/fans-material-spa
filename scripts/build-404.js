const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const target = resolveApp('build/index.html');
const html404 = resolveApp('build/404.html');

if (! fs.existsSync(target)) {
  throw new Error('The file "build/index.html" not found.');
}

const htmlContent = fs.readFileSync(target);

fs.writeFileSync(html404, htmlContent);
