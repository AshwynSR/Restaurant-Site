import React from 'react';
import { images } from '../../constants';

const SubHeading = (props) => (
  <div style={{marginBottom: '0.5rem'}}>
    <p className='p__cormorant'>{props.title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
