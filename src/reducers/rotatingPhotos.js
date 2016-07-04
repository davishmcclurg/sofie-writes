import defaultImage from 'images/rotating-photos.png'

const ADD_IMAGES = 'ADD_IMAGES'
const SET_CURRENT_IMAGE = 'SET_CURRENT_IMAGE'
const SET_NEXT_IMAGE = 'SET_NEXT_IMAGE'
const SET_INTERVAL_ID = 'SET_INTERVAL_ID'
const SET_TIMEOUT_ID = 'SET_TIMEOUT_ID'

const defaultState = Immutable.fromJS({
  images: [defaultImage],
  currentImage: defaultImage,
  nextImage: null,
  intervalId: null,
  timeoutId: null,
})

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

export const setIntervalId = (intervalId) => ({
  type: SET_INTERVAL_ID,
  intervalId,
})

export const setTimeoutId = (timeoutId) => ({
  type: SET_TIMEOUT_ID,
  timeoutId,
})

const getRandomImage = (getState) => {
  const stateImages = getState().rotatingPhotos.get('images')
  return stateImages.get(Math.floor(Math.random() * stateImages.size))
}

export const setNextRandomImage = () => (dispatch, getState) => {
  const randomImage = getRandomImage(getState)
  const preloadImage = new Image()
  preloadImage.src = randomImage
  dispatch(setNextImage(randomImage))
}

export const updateImages = (images) => (dispatch) => {
  dispatch(addImages(images))
  dispatch(setNextRandomImage())
}

const advanceImage = () => (dispatch, getState) => {
  const nextImage = getState().rotatingPhotos.get('nextImage') || getRandomImage(getState)
  dispatch(setCurrentImage(nextImage))
  dispatch(setNextRandomImage())
}

export const startRotation = (delay = 5000) => (dispatch) => {
  const intervalId = setInterval(() => dispatch(advanceImage()), delay)
  dispatch(setIntervalId(intervalId))
}

export const delayedStartRotation = (initialDelay = 2500, subsequentDelay) => (dispatch) => {
  const timeoutId = setTimeout(() => {
    dispatch(advanceImage())
    dispatch(startRotation(subsequentDelay))
    dispatch(setTimeoutId(null))
  }, initialDelay)
  dispatch(setTimeoutId(timeoutId))
}

export const stopRotation = () => (dispatch, getState) => {
  clearInterval(getState().rotatingPhotos.get('intervalId'))
  clearTimeout(getState().rotatingPhotos.get('timeoutId'))
  dispatch(setIntervalId(null))
  dispatch(setTimeoutId(null))
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_IMAGES:
      return state.update('images', images => images.concat(action.images))
    case SET_CURRENT_IMAGE:
      return state.set('currentImage', action.currentImage)
    case SET_NEXT_IMAGE:
      return state.set('nextImage', action.nextImage)
    case SET_INTERVAL_ID:
      return state.set('intervalId', action.intervalId)
    case SET_TIMEOUT_ID:
      return state.set('timeoutId', action.timeoutId)
    default:
      return state
  }
}
