import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://tokenizabens.com/contato">Contact</a>
        </li>
        <li>
          <a href= "https://ipfs.io/ipfs/QmP2YuGb7EaDkzBJbEeLaF6tGaHoREKdTyUVyu43ddB14b">About us</a>
        </li>
       
      </ul>
    </nav>
  );
}

export default FooterNav;