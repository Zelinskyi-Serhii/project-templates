#!/usr/bin/env node

const { program } = require('commander');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { Select, Input } = require('enquirer');

function listTemplates() {
  const templatesDir = path.join(__dirname, 'templates');
  const templates = fs.readdirSync(templatesDir);
  return templates;
}

async function promptFolderName(templateName) {
  const prompt = new Input({
    message: `Enter folder name for template "${templateName}": `
  });
  const folderName = await prompt.run();
  downloadTemplate(templateName, folderName);
}

function downloadTemplate(templateName, folderName) {
  console.log(`Copying template "${templateName}" into folder "${folderName}"...`);

  const templatePath = path.join(__dirname, 'templates', templateName);
  const destinationPath = path.join(process.cwd(), folderName);

  exec(`cp -r "${templatePath}" "${destinationPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(`Template "${templateName}" copied successfully into folder "${folderName}"`);
  });
}

program
  .command('get-template')
  .alias('gt')
  .description('List available templates and choose one to download')
  .action(async () => {
    const templates = listTemplates();
    const prompt = new Select({
      message: 'Choose a template to download:',
      choices: templates
    });
    const templateName = await prompt.run();
    promptFolderName(templateName);
  });

program.parse(process.argv);
