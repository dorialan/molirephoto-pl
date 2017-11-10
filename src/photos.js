import axios from 'axios';

export default (albumId) => {
  const fURL = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+process.env.REACT_APP_FLICKR_API_KEY+"&photoset_id="+albumId+"&media=photos&format=json&nojsoncallback=true"

  return new Promise((resolve, reject) => {
    axios.get(fURL)
    .then(result => {
      return resolve(result.data.photoset.photo.map(ph => {
        return {
          thumbnail: `http://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}.jpg`,
          src: `http://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}_c.jpg`
        }
      }))
    })
    .catch(err => {
      reject(err)
    })
  })
}

