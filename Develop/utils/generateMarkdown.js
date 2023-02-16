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
function renderLicenseLink(license) {}

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
      licenseLink = "";
      break;
  }
  
  return licenseLink;

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
  const content = ["Description", "Installation", "Usage", "Credits", "Repository", "License"]

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
  markdown += "## " + sections[0] + "\n";
  markdown += data.description + "\n";

  //Installation
  markdown += "## " + sections[1] + "\n";
  markdown += data.installation + "\n";

  // Usage
  markdown += "## " + sections[2] + "\n";
  markdown += data.usage + "\n";

  // Credits
  markdown += "## " + sections[3] + "\n";
  markdown += data.credits + "\n";

  //Repo
  markdown += "## " + sections[4] + "\n";
  markdown += data.repository + "\n";

  //License
  markdown += renderLicenseSection(data.license) + "\n";

  return markdown;
}

module.exports = generateMarkdown;
