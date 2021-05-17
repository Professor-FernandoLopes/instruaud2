import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { KEYS } from '../../i18n'
import { useIntl } from 'react-intl'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const RoadmapHeader = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const intl = useIntl();
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">

            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              {intl.formatMessage({ id: KEYS.HOME_SUBTITLE })}
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="success" wideMobile href="http://storedex.tokenizabens.com/">
                  {intl.formatMessage({ id: KEYS.RESERVE_NOW })} <i style={{fontSize:"10px"}}></i>
                    </Button>
                  
                </ButtonGroup>
              </div>
              
            </div>
            
          </div>
          
          
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800"> 
          
            
              
          </div>
          <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            <span className="text-color-success">{intl.formatMessage({ id: KEYS.INSTRUAUD_ROADMAP })}</span>
            </h1>
        </div>
      </div>
    </section>
  );
}

RoadmapHeader.propTypes = propTypes;
RoadmapHeader.defaultProps = defaultProps;

export default RoadmapHeader;