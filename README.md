# GAS(Google Apps Script) from CLI "clasp" with TypeScript

## Prerequisites
Ensure you have upgraded to clasp's version >= 1.5.0
```
clasp -v
```
Install TypeScript definitions for Apps Script in your project's folder.
```
npm i -S @types/google-apps-script
```
Create a file called tsconfig.json to enable TypeScript features:
```

{
  "compilerOptions": {
    "lib": ["esnext"],
    "experimentalDecorators": true
  }
}
```

## Create the TypeScript Project
Create a clasp project in an empty directory (or use an existing project):
```
clasp create --type standalone
```
## Create a TypeScript file
Note: This is a valid TypeScript file (but an invalid Apps Script file). That's OK.

## Push the project to the Apps Script server
Push the TypeScript file to the Apps Script server:
```
clasp push
```
Note: clasp automatically transpiles .ts files to valid Apps Script files upon clasp push.

## Verify the project works on script.google.com
Open the Apps Script project on script.google.com:

```
clasp open
```
Notice how a transpiled version of your project was pushed to the Apps Script server.


