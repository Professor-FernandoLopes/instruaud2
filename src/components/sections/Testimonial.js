import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'A Instruaud é uma empresa que investe na saúde dos brasileiros',
    paragraph: 'Como o dom de cuidar pulsa no coração da Instruaud, não cansamos de investir em sua saúde, sendo a venda do token Instruaud destinada a abertura de mais 26 unidades em todas as capitais do Brasil. '
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    A Instruaud com um modelo totalmente inovador e humanizado marca registrada da empresa, irá proporcionar serviços com alto grau de excelência na área de transporte de pacientes e serviços de Home Care aos quatro cantos do Brasil.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">

                  <span className="text-color-low">  </span>
                  <span className="testimonial-item-link">

                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Serão 26 unidadas sediadas em todas as capitais do Brasil nos proxímos 10 anos
                    com ambulâncias e aeronaves novas, equipamentos de última geração e profissionais
                    altamente qualificados. A instruaud junto com você Ambassador irá promover uma
                    revolução na área da saúde com a prestação dos melhores serviços de transparte aéreo, terrestre
                    e Home Care do Brasil e quiça do Mundo.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">

                  <span className="text-color-low">  </span>
                  <span className="testimonial-item-link">

                  </span>
                </div>
              </div>
            </div>


            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Nossa 1ª unidade de expansão será implantada no coração do Amazonas na capital Manaus considerada a sétima cidade mais populosa do Brasil, e sua região metropolitana, com mais de 2,7 milhões de habitantes, é a 11.ª mais populosa do país. Serão 26 unidades abertas ao longo dos proxímos 10 anos e você terá a chance única de se tornar um Crypto Ambassador e fazer parte de cada uma delas através do token INSTRUAUD - (IAUD).
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">

                  <span className="text-color-low">  </span>
                  <span className="testimonial-item-link">

                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;