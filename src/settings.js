const { ConfigurationTarget, window, workspace } = require("vscode");

const testGlobs = [
  "**/__tests__",
  "**/__mocks__",
  "**/__fixtures__",
  "**/*.spec.js",
  "**/tests"
];

async function toggleTests(shouldHide) {
  const files = workspace.getConfiguration(
    "files",
    ConfigurationTarget.Workspace
  );
  const exclude = files.get("exclude");
  testGlobs.forEach(g => (exclude[g] = shouldHide));
  await files.update("exclude", exclude, ConfigurationTarget.Workspace);
}

function toggleLightDarkTheme() {
  const grabBagConfig = workspace.getConfiguration(
    "grabBag",
    ConfigurationTarget.Global
  );
  const light = grabBagConfig.get("lightTheme");
  const dark = grabBagConfig.get("darkTheme");
  if (!light || !dark) {
    window.showInformationMessage(
      "Both light & dark themes must be set in grab bag config"
    );
    return;
  }

  const workbenchConfig = workspace.getConfiguration(
    "workbench",
    ConfigurationTarget.Global
  );
  workbenchConfig.update(
    "colorTheme",
    workbenchConfig.get("colorTheme") === light ? dark : light,
    ConfigurationTarget.Global
  );
}

module.exports = {
  toggleTests,
  toggleLightDarkTheme
};
