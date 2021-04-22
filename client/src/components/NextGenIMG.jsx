import React from 'react';

const NextGenIMG = ({
  srcWebp,
  srcJxr,
  srcJp2,
  fallback,
  styleName,
  alt,
  ...props
}) => (
  <picture>
    <source srcSet={srcWebp} type="image/webp" />
    <source srcSet={srcJxr} type="image/webp" />
    <source srcSet={srcJp2} type="image/webp" />
    <source srcSet={fallback} type="image/webp" />
    <img src={fallback} alt={alt} {...props} />
  </picture>
);

export default NextGenIMG;
