import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

var Image = function Image(props) {
  var src = props.src,
      srcSet = props.srcSet,
      sizes = props.sizes,
      sources = props.sources,
      alt = props.alt;


  return React.createElement(
    Fragment,
    null,
    sources && sources.length > 0 ? React.createElement(
      'picture',
      null,
      sources.map(function (source, i) {
        return React.createElement(
          Fragment,
          { key: i },
          source.srcSet && React.createElement('source', {
            srcSet: source.srcSet,
            sizes: source.sizes,
            media: source.media,
            type: source.type
          })
        );
      }),
      React.createElement('img', {
        className: 'iiz__img',
        src: src,
        srcSet: srcSet,
        sizes: sizes,
        alt: alt
      })
    ) : React.createElement('img', {
      className: 'iiz__img',
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      alt: alt
    })
  );
};

Image.propTypes = process.env.NODE_ENV !== "production" ? {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  sources: PropTypes.array,
  alt: PropTypes.string
} : {};

export default Image;