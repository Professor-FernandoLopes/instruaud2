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
    title: 'Atendimento personalizado com os melhores consultores do e-commerce 4.0 ',
    paragraph: 'A Decenterprise ajuda você a inserir sua empresa no e-commerce 4.0 por meio de um atendimento personalizado com alguns dos mais gabaritados consultores desse novo mercado. Converse hoje mesmo com o Fernando Lopes, um de nossos consultores que já foi destaque na mídia nacional e internacional especializada em processos de tokenização:'
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
                  "(...) pointed out Lopes. “Cryptoproperty only makes buying easier, replacing traditional intermediaries. It is a new technology that allows the purchase and sale of goods directly between the parties, which until then was impossible to be carried out over the internet in this type of market ”, he explains." 
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Igrid Homs</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">https://bitcoindynamic.com/</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — 根据该项目的创建者之一费尔南多·洛佩斯（Fernando Lopes）的说法，该计划的目的是让买家购买一部分或全部房产。 通过这种方式，进行投资，不同于他认为已经进行了投资的比特币和其他加密货币。.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">wanbizu AI</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">https://www.sxyrkj.cn/25367.html</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                 (...) uma imobiliária que aluga ou vende um imóvel por meio das criptomoedas fica com todo o valor do cashback, que seria parte do dinheiro da compra recebido de volta, enquanto o inquilino teria o desconto do valor que receberia de volta no pagamento. Explica Fernando Lopes, advogado curitibano que também é blockchain/IOT developer e assessorou o processo.
                      </p>
                </div> 
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Mirian Gasparin</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">https://miriangasparin.com.br/</a>
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