import React from 'react';

import classes from '../Card.module.css';

const CardTitle: React.FC = (props) => {
  return (
    <div className={classes.CardTitle}>
      {props.children}
    </div>
  )
}

export default CardTitle;
