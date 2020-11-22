import React from 'react';

import { useSelector } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';
// import SECTIONS_DATA from './sections.data.js';

const Directory = () => {
  const directorySections = useSelector(selectDirectorySections);

  const directoryLayout = (
    <div className='directory-menu'>
      {directorySections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );

  return directoryLayout;
};

export default Directory;
