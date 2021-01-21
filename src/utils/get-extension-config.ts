import vsc from 'vscode'

export const getExtensionConfig = (resource?: vsc.Uri) =>
  vsc.workspace.getConfiguration('grabBag', resource)
