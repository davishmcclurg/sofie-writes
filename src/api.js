import _ from 'lodash/fp'
import Contentful from 'contentful'

let locale = 'en-US'

const client = Contentful.createClient({
  space: 'jxtv3i31qnww',
  accessToken: '19428d279377b1acf0cbaccf459d8e63f05ff61062440288e0365982d32e82db'
})

const sync = (() => {
  let nextSyncToken
  return () => {
    return client
      .sync(nextSyncToken ? { nextSyncToken } : { initial: true })
      .then(response => {
        nextSyncToken = response.nextSyncToken
        return response
      })
  }
})()

const cachedSync = (() => {
  let response
  let entries = new Set()
  let assets = new Set()
  return () => {
    return response = response || sync().then(response => {
      response.entries.map(localizeFields).forEach(entries.add.bind(entries))
      response.assets.forEach(assets.add.bind(assets))
      return {
        entries: Array.from(entries),
        assets: Array.from(assets)
      }
    })
  }
})()

const localizeFields = _.update('fields', _.mapValues(_.get(locale)))

export const entries = () => cachedSync().then(_.get('entries'))
export const assets = () => cachedSync().then(_.get('assets'))

export const sections = () => entries().then(entries => {
  return entries.filter(entry => {
    return entry.sys.contentType.sys.id === 'section'
  }).sort((a, b) => (a.fields.sort - b.fields.sort))
})
