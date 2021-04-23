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
    <source srcSet={srcWebp} sizes={sizes} type="image/webp" />
    <source srcSet={srcJxr} type="image/jxr" />
    <source srcSet={srcJp2} type="image/jp2" />
    <source srcSet={fallback} type="image/jpeg" />
    <img {...props} src={fallback} alt={alt} />
  </picture>
);

export default NextGenIMG;
