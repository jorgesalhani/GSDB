const Sample = require('./models/sample');
const DataManager = require('./managers/dataManager');
const SpreadsheetManager = require('./managers/spreadsheetManager');

global.SpreadsheetManager = SpreadsheetManager;
global.DataManager = DataManager;
global.Usuarios = Sample;
