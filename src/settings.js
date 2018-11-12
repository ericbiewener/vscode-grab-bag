const { ConfigurationTarget, workspace } = require('vscode')

const testGlobs = [
  '**/__tests__',
  '**/__mocks__',
  '**/__fixtures__',
  '**/*.spec.js',
  '**/tests',
]

async function toggleTests(shouldHide) {
  const files = workspace.getConfiguration(
    'files',
    ConfigurationTarget.Workspace
  )
  const exclude = files.get('exclude')
  testGlobs.forEach(g => (exclude[g] = shouldHide))
  console.log(exclude)
  await files.update('exclude', exclude, ConfigurationTarget.Workspace)
}

function toggleLightDarkTheme() {
  const config = workspace.getConfiguration(
    'workbench',
    ConfigurationTarget.Global
  )
  config.update(
    'colorTheme',
    config.get('colorTheme') === 'Ayu Light' ? 'Ayu Mirage' : 'Ayu Light',
    ConfigurationTarget.Global
  )
}

module.exports = {
  toggleTests,
  toggleLightDarkTheme,
}
