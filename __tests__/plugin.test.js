const esbuild = require('esbuild')
const path = require('path')

const unprefixNodeCoreModules = require('../index')
const regex = new RegExp(/node:/g)

async function run(file) {
  const result = await esbuild.build({
    entryPoints: [path.resolve(__dirname, `./fixtures/${file}`)],
    write: false,
    bundle: true,
    platform: 'node',
    plugins: [unprefixNodeCoreModules],
  })

  return result.outputFiles[0].text
}

describe('plugin', () => {
  test('import ', async () => {
    const output = await run('import.js')

    expect(output).not.toMatch(regex)
  })
  test('legacy ', async () => {
    const output = await run('legacy.js')

    expect(output).not.toMatch(regex)
  })
  test('none ', async () => {
    const output = await run('none.js')

    expect(output).not.toMatch(regex)
  })
  test('require ', async () => {
    const output = await run('require.js')

    expect(output).not.toMatch(regex)
  })
})
