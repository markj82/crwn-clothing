import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
    // type submit will be passed here to the button
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;