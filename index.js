const core = require('@actions/core');
const github = require('@actions/github');

try {
  const daemons = core.getInput('selected_daemons');
  const daemons_split = daemons.split(" ");
  const first = []
  const second = []
  daemons_split.forEach(daemon => {
    if(daemon.match("matching") || daemon.match("slavebook")){
      let slavebook = daemon.replace("matching", "slavebook")
      first.push(slavebook)
    }else{
      second.push(daemon)
    }    
  });

  core.setOutput("daemons_first", first);
  
  core.setOutput("daemons_second", second);

} catch (error) {
  core.setFailed(error.message);
}