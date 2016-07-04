import Contentful from 'contentful'

const locale = 'en-US'
const localizeFields = _.update('fields', _.mapValues(_.get(locale)))

export const client = Contentful.createClient({
  host: 'preview.contentful.com',
  space: '0maefx6qczs5',
  accessToken: '9770a44501473cc2ed7bb19c6cc5556cfbebbd3c40baaf03dce4f8e3aa880f7b',
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
