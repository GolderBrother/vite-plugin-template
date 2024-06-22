import type { Plugin } from 'vite'
import { createPluginName } from './shared/create'

interface Options {
  [key: string]: any
}

const useName = createPluginName()
function VitePlugin(options: Options = {}): Plugin {
  return {
    name: useName('name')
  }
}

export default VitePlugin
