import Contentful from 'contentful'

const locale = 'en-US'
const localizeFields = _.update('fields', _.mapValues(_.get(locale)))

const client = Contentful.createClient({
  space: 'jxtv3i31qnww',
  accessToken: '19428d279377b1acf0cbaccf459d8e63f05ff61062440288e0365982d32e82db'
})

const sync = (() => {
  let nextSyncToken
  return () => client
    .sync(nextSyncToken ? { nextSyncToken } : { initial: true })
    .then(response => {
      nextSyncToken = response.nextSyncToken
      return response
    })
})()

const cachedSync = (() => {
  let cachedResponse
  const entries = new Set()
  const assets = new Set()
  return () => {
    cachedResponse = cachedResponse || sync().then(response => {
      response.entries.map(localizeFields).forEach(entries.add.bind(entries))
      response.assets.forEach(assets.add.bind(assets))
      return {
        entries: Array.from(entries),
        assets: Array.from(assets),
      }
    })
    return cachedResponse
  }
})()

export const entries = () => cachedSync().then(_.get('entries'))
export const assets = () => cachedSync().then(_.get('assets'))
