const defaultState = Immutable.fromJS([
  {
    id: 'ask-sofie',
    text: 'ask sofie',
    path: '/ask-sofie',
    image: require('images/ask-sofie.png')
  },
  {
    id: 'professional',
    text: 'professional',
    path: '/professional',
    image: require('images/professional.png')
  },
  {
    id: 'writing',
    text: 'writing',
    path: '/writing',
    image: require('images/writing.png')
  },
  {
    id: 'music',
    text: 'music',
    path: '/music',
    image: require('images/music.png')
  },
  {
    id: 'art',
    text: 'art',
    path: '/art',
    image: require('images/art.png')
  },
  {
    id: 'headshots',
    text: 'headshots',
    path: '/headshots',
    image: require('images/headshots.png')
  },
  {
    id: 'contact',
    text: 'contact',
    path: '/contact',
    image: require('images/contact.png')
  }
])

export default (state = defaultState, action) => {
  return state
}
