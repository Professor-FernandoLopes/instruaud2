import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <div style={{marginTop: 80}}>
          <Image
            src={require('./../../../assets/images/instruaud_logo.png')}
            alt="Open"
            width={120}
             />
          </div>  
        </Link>
      </h1>
    </div>
  );
}

export default Logo;