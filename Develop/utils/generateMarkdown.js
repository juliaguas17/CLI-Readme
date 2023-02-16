// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

let licenseLink;

  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "Apache v2":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GNUPL v3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    default:
      licenseLink = " developer ";
      break;
  }
  
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";

  if (license != "None") {
    licenseSect += "## License\n"
    licenseSect += "Please see " + renderLicenseLink(license) + " to get detailed license information.\n";
  }

  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const content = ["Description", "Installation", "Usage", "Credits", "Questions", "License"]

  //Title
  let markdown = "# " + data.title + "\n";

  // License Badge
  markdown += renderLicenseBadge(data.license) + "\n";

  //Table of Contents
  markdown += "## Table of Contents\n";
  for (let i=0; i<content.length; i++) {
    if (! (content[i] === "License" && data.license === "None")) {
      markdown += i+1 + ". [" + content[i] + "](#" + content[i][0].toLowerCase() + content[i].substring(1) + ")\n";
    }
  }
  markdown += "\n";

  //Description
  markdown += "# Description\n";
  markdown += data.description + "\n";

  //Installation
  markdown += "# Installation\n";
  markdown += data.installation + "\n";

  // Usage
  markdown += "# Usage\n";
  markdown += data.usage + "\n";

  // Credits
  markdown += "# Contributing\n";
  markdown += data.credits + "\n";

  // Questions
  markdown += "# Questions\n";
  markdown += "I can be reached via email or Github with further questions.\n"
  markdown += "Github: " + data.repository + "\n";
  markdown += "Email: " + data.email + "\n";

  //License
  markdown += renderLicenseSection(data.license) + "\n";

  return markdown;
}

module.exports = generateMarkdown;
