import React from 'react';
import CustomLink from '../src/components/CustomLink';

const NotFound = () => (
  <div>
    <h2>{'404 NOT FOUND'}</h2>
    <h2><CustomLink href="/">{'トップへ'}</CustomLink></h2>
  </div>
);

export default NotFound;
