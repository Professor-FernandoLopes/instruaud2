import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Seja um CryptoAmbassador da Instruaud',
    paragraph: 'Ao adquirir a cryptomoeda Instruaud você adquire o status de cryptoAmbassador e recebe  parte do lucro líquido anual até 6%, conforme sua contribuição para a formação da comunidade Instruaud: uma comunidade voltada a melhorar a prestação dos serviços de saúde no Brasil, gerar empregos no setor, e combater os efeitos da covid 19.'
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

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/instruaud_logo.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Privilégios dos CryptoAmbassadors
                    </h4>
                  <p className="m-0 text-sm">
                  Os cryptoAmbassadors têm privilégios de acesso para visitar a INSTRUAUD e acompanhar todos os processos até a venda dos serviços em primeira mão, nos termos do whitePaper.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/instruaud_logo.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Benefícios
                    </h4>
                  <p className="m-0 text-sm">
                  O cryptoAmbassador tem a possibilidade de receber  parte do lucro líquido anual até 6%, conforme sua contribuição para a formação da comunidade Instruaud. 
                       
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/instruaud_logo.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                     Responsabilidade social
                    </h4>
                  <p className="m-0 text-sm">
                  A comunidade Instruaud tem por objetivo a implantação de 26 novas bases de atendimento espalhadas em todas as capitais do Brasil, proporcionando a geração de mais de 3.600 postos de trabalho diretos e mais de 1500 indiretos ligados a aérea da Saúde. 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/instruaud_logo.png')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                   Transparência 
                    </h4>
                  <p className="m-0 text-sm">
                   Os CryptoAmbassadors  terão a oportunidade de conhecer todo o processo da INSTRUAUD no transporte de pacientes de suporte avançado em UTI área e terrestre e na prestação dos serviços de Home Care.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/instruaud_logo.png')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Lucratividade
                    </h4>
                  <p className="m-0 text-sm">
                  Oportunidade de integrar o 8º maior mercado de saúde do mundo, que movimenta R$ 700 bilhões por
ano no país, segundo dados do Instituto Brasileiro de Geografia e Estatística (IBGE) e do Ministério da
Saúde.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/instruaud_logo.png')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                   Tradição
                    </h4>
                  <p className="m-0 text-sm">
                  A Instruaud não é mais um projeto de tokenização, mas um negócio sério que já existe, que tem histórico de
verdade, provado ao longo dos seus 09 anos de existência.

                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;