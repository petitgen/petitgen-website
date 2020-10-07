export default image => ({
  ...image,
  aspectRatio:
    image.aspectRatio ||
    (image.height && image.width && image.width / image.height)
})
