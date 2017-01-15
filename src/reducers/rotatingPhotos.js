import defaultImage from 'images/rotating-photos.png'

const ADD_IMAGES = 'ADD_IMAGES'
const ADVANCE_IMAGE = 'ADVANCE_IMAGE'

const defaultState = {
  images: [defaultImage],
  currentImage: defaultImage,
  nextImage: null,
}

export const addImages = (images) => ({
  type: ADD_IMAGES,
  images,
  nextImageRandom: Math.random(),
})

export const advanceImage = () => ({
  type: ADVANCE_IMAGE,
  currentImageRandom: Math.random(),
  nextImageRandom: Math.random(),
})

const sample = (array, random) => {
  if (!array || !array.length) {
    return null
  }
  return array[Math.floor(random * array.length)]
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_IMAGES: {
      const images = state.images.concat(action.images)
      return {
        ...state,
        images,
        nextImage: sample(images, action.nextImageRandom),
      }
    }
    case ADVANCE_IMAGE:
      return {
        ...state,
        currentImage: state.nextImage || sample(state.images, action.currentImageRandom),
        nextImage: sample(state.images, action.nextImageRandom),
      }
    default:
      return state
  }
}
