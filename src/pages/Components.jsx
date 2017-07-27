import React from 'react';
import PropTypes from 'prop-types';

import { container } from 'bootstrap-css-modules/css/container.css';

import Columns from '../components/Columns.jsx';
import Alerts from '../components/Alerts.jsx';
import ButtonGroup from '../components/ButtonGroup.jsx';
import Modal from '../components/Modal.jsx';
import Carousel from '../components/Carousel.jsx';

const Components = (props) => {
  window.document.title = 'Bootstrap CSS Modules | Components';

  return (
    <div className={container}>
      <Columns />
      <Alerts />
      <ButtonGroup />
      <Modal />
      <Carousel images={props.data.carouselImages} />
    </div>
  );
};

Components.propTypes = {
  data: PropTypes.object.isRequired
};

export default Components;
