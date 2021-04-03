// Return License Badge
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'MIT':
      return `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)`
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

// Return License Link
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return `https://opensource.org/licenses/Apache-2.0`
    case 'MIT':
      return `https://lbesson.mit-license.org/`
    case 'Mozilla':
      return `https://opensource.org/licenses/MPL-2.0`
  }
}

module.exports.renderLicenseBadge = renderLicenseBadge;
module.exports.renderLicenseLink = renderLicenseLink;
