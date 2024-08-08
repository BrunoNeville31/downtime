const core = require("@actions/core");

const validate_daemon = (daemon) => {
  if (daemon.length == 0) {
    return;
  }
};

const validate_build_daemons = (build_daemons) => {
  if (build_daemons.length == 0) {
    core.notice("No daemons to perform the build");
  }
};

const run = () => {
  try {
    core.notice(core.getInput("selected_daemons"));
    const selected_daemons = core.getInput("selected_daemons").split(" ");
    const step = core.getInput("step");
    const build_daemons = [];

    if (step == "one") {
      selected_daemons.forEach((daemon) => {
        validate_daemon(daemon);

        if (daemon.match("matching")) {
          const slavebook = daemon.replace("matching", "slavebook");

          if (!build_daemons.includes(slavebook)) {
            build_daemons.push(slavebook);
          }
        }
      });

      validate_build_daemons(build_daemons);
    } else if (step == "two") {
      selected_daemons.forEach((daemon) => {
        validate_daemon(daemon);

        if (daemon.match("slavebook")) {
          const matching = daemon.replace("slavebook", "matching");

          if (!build_daemons.includes(matching)) {
            build_daemons.push(matching);
          }
        } else {
          if (!build_daemons.includes(daemon)) {
            build_daemons.push(daemon);
          }
        }
      });

      validate_build_daemons(build_daemons);
    }
    core.notice(build_daemons.join(" "));
    core.setOutput("daemons", build_daemons.join(" "));
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();

// matching-general-one slavebook-general-one trade-executor-general-one
