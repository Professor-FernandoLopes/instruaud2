import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Sua empresa no comércio 4.0',
    paragraph: 'A decenterprise insere sua empresa no comércio 4.0 mediante um método ágil(Agile software development), responsável por realizar a fusão entre o mundo físico e o mundo digital. Portanto, com nossa tecnologia sua empresa estará apta a satisfazer as exigências do comércio 4.0, fundadas na economia colaborativa e circular, na disrupção, internacionalização e escalabilidade.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                   Digitization: <i style={{color:"white", textTransform: 'lowercase'}}> do analógico para uma <span style={{color:"#6163FF", textTransform: 'lowercase'}} > rede distribuída</span> com </i> <span style={{color:"#6163FF", textTransform: 'lowercase'}}> smart contracts. </span>
                  </div>
                <h3 className="mt-0 mb-12">
                  Transparência e integridade assegurada pelo IPFS
                  </h3>
                <p className="m-0">
                O primeiro passo para ingressar na nova economia colaborativa é o uso do IPFS em combinação com smart contracts para disponibilização das informações relativas à uma transação específica. Na prática isso significa que os negócios  são lastreados por provas irrefutáveis das transações, reforçando a adimplência e cumprimento dos direitos do consumidor.  
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/decenterprise.svg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                 Digitalization: <i style={{color:"white", textTransform: 'lowercase'}}> <span style={{color:"#6163FF", textTransform: 'lowercase'}} > </span> “the use of <span style={{color:"#6163FF", textTransform: 'lowercase'}}> digital technologies </span> to change a business model and provide new revenue and value-producing opportunities; it is the process of moving to a digital business."</i> (Gartner).
                  </div>
                <h3 className="mt-0 mb-12">
                Ingresse na nova economia colaborativa!
                  </h3>
                   Ao digitalizar seus produtos e serviços, além de proporcionar ao cliente acesso direto, seguro e transparente por meio da blockchain, você ainda poderá agregar novos benefícios, como cash back, programas de fidelidade, prêmios por indicações, dentre inúmeras outras formas de economia colaborativa.
                <p className="m-0">
                 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dc.svg')} 
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Decenterprise: <i style={{color:"white", textTransform: 'lowercase'}} > A fusão entre o <span style={{color:"#6163FF", textTransform: 'lowercase'}} > real</span> e o <span style={{color:"#6163FF", textTransform: 'lowercase'}} > virtual. </span> </i>
                  </div>
                <h3 className="mt-0 mb-12">
                  Conecte-se sem intermediários
                  </h3>
                <p className="m-0">
                  A decenterprise e-commerce platform usa a blockchain da Ethereum para conectar você de forma direta com seu cliente sem intermediários. Blockchain de verdade significa diminuir barreiras entre pessoas, integrando o comércio em uma única realidade.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/commerce.svg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;