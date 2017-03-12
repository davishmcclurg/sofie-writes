import Contentful from 'contentful'

const previewable = ['staging.sofiewrites.com', 'localhost'].includes(window.location.hostname)

export default Contentful.createClient({
  host: previewable ? 'preview.contentful.com' : 'cdn.contentful.com',
  space: '0maefx6qczs5',
  accessToken: '9770a44501473cc2ed7bb19c6cc5556cfbebbd3c40baaf03dce4f8e3aa880f7b',
})
