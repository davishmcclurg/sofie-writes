import defaultImage from 'images/rotating-photos.png'

const ADD_IMAGES = 'ADD_IMAGES'
const SET_CURRENT_IMAGE = 'SET_CURRENT_IMAGE'
const SET_NEXT_IMAGE = 'SET_NEXT_IMAGE'

const defaultState = {
  images: [defaultImage],
  currentImage: defaultImage,
  nextImage: null,
}

export const addImages = (images) => ({
  type: ADD_IMAGES,
  images,
})

export const setCurrentImage = (currentImage) => ({
  type: SET_CURRENT_IMAGE,
  currentImage,
})

export const setNextImage = (nextImage) => ({
  type: SET_NEXT_IMAGE,
  nextImage,
})

const getRandomImage = (state) => {
  const stateImages = state.rotatingPhotos.images
  return stateImages[Math.floor(Math.random() * stateImages.length)]
}

export const advanceImage = () => (dispatch, getState) => {
  const nextImage = getState().rotatingPhotos.nextImage || getRandomImage(getState())
  dispatch(setCurrentImage(nextImage))
  dispatch(setNextImage(getRandomImage(getState())))
}

export const updateImages = (images) => (dispatch, getState) => {
  dispatch(addImages(images))
  dispatch(setNextImage(getRandomImage(getState())))
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_IMAGES:
      return {
        ...state,
        images: state.images.concat(action.images),
      }
    case SET_CURRENT_IMAGE:
      return {
        ...state,
        currentImage: action.currentImage,
      }
    case SET_NEXT_IMAGE:
      return {
        ...state,
        nextImage: action.nextImage,
      }
    default:
      return state
  }
}
