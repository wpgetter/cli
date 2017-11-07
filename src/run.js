/* jshint node: true */

exports = module.exports = {};

exports.parse = function (args) {
  let availableSubCommands = [
   'list',
   'reset',
  ];
  let subCommand = (args[0] === 'cli.js') ? args[1] : args[0];

  /**
   * Exit process with code -1 if sub-command doesn't exist.
   */
  if (availableSubCommands.indexOf(subCommand) === -1) {
    return false;
  }

  return true;
};
