import React from 'react';
import './Circle.sass';

function Circle({ radius, children }) {
    return <div className={`circle circle_radius_${radius}`}>{children}</div>;
}
export default Circle;
