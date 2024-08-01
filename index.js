const core = require('@actions/core');
const github = require('@actions/github');

try {
  const daemons = core.getInput('selected_daemons');
  console.log(`Hello ${daemons}!`);
  
  core.setOutput("daemons_first", daemons);
  
  core.setOutput("daemons_second", daemons);

} catch (error) {
  core.setFailed(error.message);
}