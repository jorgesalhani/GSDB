# GSDB
Google Spreadsheet Database

# install
```bash
npm i
```

# create a clasp project
```bash
npx clasp create --type standalone --rootDir ./dist
```

# deploy
```bash
npm run deploy
```

# create a .local.json file
```bash
touch .local.json
```

# set up local spreadsheet IDs
```bash
{
  SAMPLE: 
}
```

# Sugestion for .local.json organization
```json
{
"development": { 
    "schema": {
      "engSoft": { // Project Name
        "database": {
          "Sample": { // Spreadsheet1 Name
            "id": "spreadsheetId",
            "tables": {
              "Sheet1": ["Column1", "Column2", "Column3"],
              "Sheet2": ["Column1",	"Column2"]
            }
          },
          "Adventure_Time": { // Spreadsheet2 Name
            "id": "spreadsheetId",
            "tables": {
              "Sheet1": ["Column1", "Column2", "Column3"],
              "Sheet2": ["Column1",	"Column2"]
            }
          }
        }
      }
    }
  },
  "homologation": { ... },
  "production": { ... }
}
```

# run
```bash
node ./src/main.js
```


