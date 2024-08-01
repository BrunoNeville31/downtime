const core = require('@actions/core');
const github = require('@actions/github');

try {
  const daemons = core.getInput('selected_daemons');
  const daemons_split = daemons.split(" ");
  const first = []
  const second = []
  daemons_split.forEach(daemon => {
    if(daemon.match("matching") || daemon.match("slavebook")){
      const slavebook = daemon.replace("matching", "slavebook")
      
      if(!first.includes(slavebook)){
        first.push(slavebook)
      }      
      
      if(daemon.match("matching")){
        second.push(daemon)
      }      
    }else{
      second.push(daemon)
    }    
  });

  core.setOutput("daemons_first", first);
  
  core.setOutput("daemons_second", second);

} catch (error) {
  core.setFailed(error.message);
}

// matching-general-one slavebook-general-one trade-executor-general-one