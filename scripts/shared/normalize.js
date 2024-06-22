const useJson = (origin) => {
  const json = JSON.parse(origin)
  const useString = () => JSON.stringify(json, null, 2)

  return {
    json,
    useString
  }
}

const useName = (origin) => `vite-plugin-${origin}`
module.exports = {
  useJson,
  useName
}
