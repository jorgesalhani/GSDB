const SheetsApi = require('./src/externals/sheetsApi')
const GoogleOauth = require('./src/authenticate/googleOauth');
const DataManager = require('./src/managers/dataManager');

const fs = require('fs')
const localFile = fs.readFileSync('.local.json')
const locals = JSON.parse(localFile)

async function main() {
  const googleOauth = new GoogleOauth();
  const auth = await googleOauth.authorize();
  
  const sheetsApi = new SheetsApi(auth)
  sheetsApi.setSpreadsheetId(locals.Sample)
  sheetsApi.setSheetName('Adventure_Time')

  const usuarios = await sheetsApi.read()
  const usuariosAsMap = DataManager.createMap(usuarios, 'NOME')
  console.log(usuarios)
  console.log(usuariosAsMap)
}

(async () => {
  await main();
})();