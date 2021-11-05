const esbuild = require('esbuild')
const assert = require('assert').strict

const unprefixNodeCoreModules = require('../index')

async function test(name, file) {
  const result = await esbuild.build({
    entryPoints: [file],
    write: false,
    bundle: true,
    platform: 'node',
    plugins: [unprefixNodeCoreModules],
  })

  try {
    assert(/node:/g.test(result.outputFiles[0].text) === false, new Error())
    console.log('✅', name)
  } catch (e) {
    console.error('❌', name)
  }
}

const folder = '__tests__/files/'

test('import', `${folder}/import.js`)
test('legacy', `${folder}/legacy.js`)
test('require', `${folder}/require.js`)
