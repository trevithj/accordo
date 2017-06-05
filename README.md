# Accordo apps project

The below app(s) assume that `git`, `npm` and `node` are installed on the target machine.

To install the project, navigate to the target folder and run: `git clone https://github.com/trevithj/accordo`. This will create the project under the `accordo` folder.

## Bus Simulator

Navigate to the `accordo` folder to do any of the following:

  * Enter `npm run bus-sim` to run the bus simulator CLI. The app will display a command prompt `>` to allow command entry. Commands are case-insensitive. Enter "QUIT" or press `CTRL-D` to end the app.
  * Enter `npm run bus-sim-test` to run the simulator using pre-entered commands. These are located in the `src/bin-sim/test-input.txt` file.
  * Enter `npm test` to run unit tests for the simulator. Note that this assumes `mocha` and `chai` are installed globally. If not, first run `npm init` to load these modules locally.

