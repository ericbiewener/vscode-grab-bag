const _ = require('lodash')
const { commands, window } = require('vscode')

const symbolCacheMap = {} // For quick filtering of results in `onDidChangeValue`
const symbolCacheArray = [] // For maintaining ordered list of most recently accessed symbols

async function betterGoToSymbol() {
  const quickPick = window.createQuickPick()
  quickPick.placeholder = 'Search for symbol...'

  quickPick.items = symbolCacheArray

  quickPick.onDidChangeValue(
    _.debounce(async function(query) {
      // Hack for only searching cached symbols
      if (query.startsWith(' ')) {
        quickPick.items = symbolCacheArray
        return
      }

      quickPick.busy = true
      const symbols = await commands.executeCommand(
        'vscode.executeWorkspaceSymbolProvider',
        query
      )
      const newSymbols = symbolCacheArray.slice()
      for (const s of symbols) {
        const item = {
          label: s.name,
          description: s.location.uri.path, // need to trim off workspace root
          range: s.location.range,
        }
        if (!symbolCacheMap[getCacheName(item)]) newSymbols.push(item)
      }
      console.log(newSymbols[0].label)
      quickPick.items = newSymbols
      quickPick.busy = false
    }, 200)
  )

  quickPick.onDidChangeActive((...args) => {
    console.log(args)
  })

  quickPick.onDidChangeSelection(([item]) => {
    symbolCacheMap[getCacheName(item)] = item
    symbolCacheArray.unshift(item)

    // Don't allow cache to grow beyond 1000
    if (symbolCacheArray.length > 1000) {
      const removedItem = symbolCacheArray.pop()
      delete symbolCacheMap[getCacheName(removedItem)]
    }
    quickPick.dispose()
  })

  await quickPick.show()
}

function getCacheName(item) {
  return `${item.label} ${item.description}`
}

module.exports = {
  betterGoToSymbol,
}
