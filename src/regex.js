const { window } = require('vscode')

const pyRegex = {
  def: /^[ \t]*def ([^(]+)/gm,
  class: /^[ \t]*class ([^(]+)/gm,
}

function getPythonDeclarations(type='def') {
  const editor = window.activeTextEditor
  const text = editor.document.getText()

  const regex = pyRegex[type]
  const matches = []
  let match
  while ((match = regex.exec(text))) {
    matches.push({
      name: match[1],
      index: match.index,
    })
  }
  return matches
}

function findMatchForOffset(matches, offset) {
  if (offset == null) {
    const editor = window.activeTextEditor
    offset = editor.document.offsetAt(editor.selection.active)
  }

  return matches.reverse().find(m => m.index <= offset)
}

module.exports = {
  getPythonDeclarations,
  findMatchForOffset,
}
