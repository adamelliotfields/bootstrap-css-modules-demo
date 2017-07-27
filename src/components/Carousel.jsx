import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { dBlock } from 'bootstrap-css-modules/css/display.css';
import { imgFluid } from 'bootstrap-css-modules/css/images.css';
import { textLeft } from 'bootstrap-css-modules/css/text.css';
import { rounded } from 'bootstrap-css-modules/css/borders.css'
import {
  active,
  carousel,
  carouselIndicators,
  carouselInner,
  carouselItem,
  carouselItemNext,
  carouselItemPrev,
  carouselItemLeft,
  carouselItemRight,
  carouselControlPrev,
  carouselControlPrevIcon,
  carouselControlNext,
  carouselControlNextIcon
} from 'bootstrap-css-modules/css/components.css';

import Section from './Section.jsx';

class Carousel extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  };

  state = {
    activeSlide: 0,
    nextSlide: null,
    prevSlide: null,
    sliding: null,
    height: 0
  };

  // Make setState return a promise
  // Useful for using async/await with setState instead of callbacks
  asyncSetState = (nextState) => {
    return new Promise((resolve) => {
      this.setState(nextState, () => {
        resolve();
      });
    });
  };

  // Force DOM reflow
  // Necessary for transitions to animate
  forceReflow = (slide) => {
    return this.carouselInner.children[slide].offsetHeight;
  };

  // Force 16:9 aspect ratio
  // Needs to be set on carousel, carouselInner, and carouselItem img
  getCarouselHeight = () => {
    this.setState({
      height: this.carousel.offsetWidth * 0.5625
    });
  };

  // Animate slide transition
  transitionSlide = async (to, orientation, direction) => {
    const { sliding } = this.state;

    if (sliding === 'left' || sliding === 'right') return;

    await this.asyncSetState({
      [`${orientation}Slide`]: to
    });

    this.forceReflow(to);

    await this.asyncSetState({
      sliding: direction
    });

    window.setTimeout(() => {
      this.setState({
        sliding: null,
        [`${orientation}Slide`]: null,
        activeSlide: to
      });
    }, 600);
  };

  // Next control click handler
  handleNext = () => {
    const { activeSlide } = this.state;
    const { images } = this.props;

    let nextSlide = activeSlide === images.length - 1 ? 0 : activeSlide + 1;

    this.transitionSlide(nextSlide, 'next', 'left');
  };

  // Prev control click handler
  handlePrev = () => {
    const { activeSlide } = this.state;
    const { images } = this.props;

    let prevSlide = activeSlide === 0 ? images.length - 1 : activeSlide - 1;

    this.transitionSlide(prevSlide, 'prev', 'right');
  };

  // Indicator click handler
  handleClick = (event) => {
    const { activeSlide } = this.state;
    const id = parseInt(event.target.id);

    if (id === activeSlide) return;

    if (id < activeSlide) this.transitionSlide(id, 'prev', 'right');

    if (id > activeSlide) this.transitionSlide(id, 'next', 'left');
  };

  // Set carousel height on mount and add resize listener
  componentDidMount () {
    this.getCarouselHeight();

    window.addEventListener('resize', this.getCarouselHeight);
  }

  // Remove resize listener on unmount
  componentWillUnmount () {
    window.removeEventListener('resize', this.getCarouselHeight);
  }

  render () {
    const { images } = this.props;
    const {
      activeSlide,
      nextSlide,
      prevSlide,
      sliding,
      height
    } = this.state;

    return (
      <Section
        display='Carousel'
        url='https://github.com/adamelliotfields/bootstrap-css-modules-demo/blob/master/src/components/Carousel.jsx'
      >
        <div
          ref={(carousel) => { this.carousel = carousel; }}
          className={`${carousel} ${rounded}`}
          style={{height: `${height}px`}}
        >
          <ol className={carouselIndicators}>
            {images.map((image, index) => (
              <li
                key={`indicator-${index}`}
                id={index}
                className={index === activeSlide ? active : ''}
                onClick={(event) => this.handleClick(event)}
              />
            ))}
          </ol>
          <div
            ref={(carouselInner) => { this.carouselInner = carouselInner; }}
            className={`${carouselInner} ${rounded}`}
            style={{height: `${height}px`}}
          >
            {images.map((image, index) => (
              <div
                key={`item-${index}`}
                className={classNames({
                  [active]: activeSlide === index,
                  [carouselItem]: true,
                  [carouselItemNext]: nextSlide === index,
                  [carouselItemPrev]: prevSlide === index,
                  [carouselItemLeft]: sliding === 'left' && (activeSlide === index || nextSlide === index),
                  [carouselItemRight]: sliding === 'right' && (activeSlide === index || prevSlide === index)
                })}
              >
                <img
                  className={`${dBlock} ${imgFluid}`}
                  src={image}
                  style={{height: `${height}px`}}
                />
              </div>
            ))}
          </div>
          <a className={carouselControlPrev} onClick={(event) => this.handlePrev(event)}>
            <span className={carouselControlPrevIcon} />
          </a>
          <a className={carouselControlNext} onClick={(event) => this.handleNext(event)}>
            <span className={carouselControlNextIcon} />
          </a>
        </div>
        <div className={textLeft}>
          <small><em>Note: The carousel will not animate properly on IE11 or mobile browsers. I recommend using a JavaScript animation library like GSAP for complex animations in production.</em></small>
        </div>
      </Section>
    );
  }
}

export default Carousel;
