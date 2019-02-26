/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Gallery-Image.style';
import Zoom from './Zoom/Zoom';

class GalleryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xPosition: '0%',
      yPosition: '0%',
      mouseOn: false,
      summaryDivRef: () => document.querySelector('#summaryCont'),
      absolutePositionTop: 0,
      absolutePositionLeft: 0,
      zoomHeight: 0,
      zoomWidth: 0,
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseEnter() {
    const { summaryDivRef } = this.state;
    const summaryDiv = summaryDivRef();
    const {
      top,
      left,
      width,
      height,
    } = summaryDiv.getBoundingClientRect();
    this.setState({
      mouseOn: true,
      absolutePositionTop: top,
      absolutePositionLeft: left,
      zoomWidth: width,
      zoomHeight: height,
    });
  }

  onMouseMove(event) {
    const offsetX = event.clientX - event.target.getBoundingClientRect().left;
    const offsetY = event.clientY - event.target.getBoundingClientRect().top;
    const imageWidth = event.target.width;
    const imageHeight = event.target.height;
    const xPercent = `${Math.floor((offsetX / imageWidth) * 100)}%`;
    const yPercent = `${Math.floor((offsetY / imageHeight) * 100)}%`;
    this.setState({
      yPosition: yPercent,
      xPosition: xPercent,
    });
  }

  onMouseLeave() {
    this.setState({
      mouseOn: false,
    });
  }

  render() {
    const {
      xPosition,
      yPosition,
      mouseOn,
      absolutePositionLeft,
      absolutePositionTop,
      zoomHeight,
      zoomWidth,
    } = this.state;
    const { image } = this.props;
    return (
      <Container>
        <div>
          <img
            onMouseEnter={this.onMouseEnter}
            onMouseMove={this.onMouseMove}
            onMouseLeave={this.onMouseLeave}
            key={image}
            id="selectedImg"
            src={image}
            alt="example"
          />
        </div>
        {mouseOn ? (
          <Zoom
            image={image}
            xPosition={xPosition}
            yPosition={yPosition}
            absolutePositionTop={absolutePositionTop}
            absolutePositionLeft={absolutePositionLeft}
            zoomHeight={zoomHeight}
            zoomWidth={zoomWidth}
          />
        )
          : ''
         }
        <p>Roll over image to zoom in</p>
      </Container>
    );
  }
}

GalleryImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default GalleryImage;
