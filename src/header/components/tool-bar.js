import React from 'react';
import { Toolbar } from 'react-md';
import Nav from '../components/nav'
import KebabMenu from '../components/kebabMenu'

const Simple = () => (
  <div className="toolbars__examples">
    <Toolbar
      colored
      nav={<Nav />}
      title="RojiVerde"
      actions={<KebabMenu id="toolbar-colored-kebab-menu" />}
    />
  </div>
);
export default Simple;