import React from 'react';
import Lightbox from 'react-images';
import Masonry from 'react-masonry-component';
import getAlbumPhotos from './photos';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      isLoading: true,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  componentDidMount() {
    getAlbumPhotos('72157683777711661')
    .then(photos =>
      this.setState({
        photos
      })
    )
  }

  handleImagesLoaded() {
    this.setState({
      isLoading: false,
    })
  }

  openLightbox(index) {
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  renderImages() {
    return this.state.photos.map((photo, key) => {
      return (
        <div className="photo" key={key} onClick={() => this.openLightbox(key)}>
          <img src={photo.thumbnail} alt="..." />
        </div>
      )
    })
  }

  render() {
    return (
      <div style={{ marginBottom: "2em" }}>
        { this.state.isLoading && <div className="spinner" /> }
        <Masonry
          onImagesLoaded={this.handleImagesLoaded.bind(this)}
        >
          {this.renderImages()}
        </Masonry>
        <Lightbox images={this.state.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickImage={this.gotoNext}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          showImageCount={false}
        />
      </div>
    )
  }
}
