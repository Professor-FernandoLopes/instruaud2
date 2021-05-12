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
    title: 'A cryptoeconomia em função da economia colaborativa',
    paragraph: 'A instruaud é um projeto inédito no Brasil e no mundo, que funde o conceito de ambassador da economia colaborativa à transparência e integridade da cryptoeconomia, estruturada sobre os fundamentos da blockchain.'
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
                
                <h3 className="mt-0 mb-12">
                  Faça parte de nossa comunidade.
                  </h3>
                <p className="m-0">
                A INSTRUAUD – Sistema Integrado de Cuidados e Administração de Serviços em Saúde é uma empresa de Serviços de Home Care, Remoção em UTI Aérea e Terrestre, Auditoria Hospitalar e Médica. Atuamos no mercado de grandes empresas, operadoras de Planos de Saúde e Instituições Hospitalares. Temos uma equipe multiprofissional composta por Médicos Generalistas, Enfermeiros, Fisioterapeutas, Nutricionistas, Fonoaudiologos, Terapeuta Ocupacional, além de todos o suporte de administradores com ampla experiência no segmento em saúde. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/iaud1.JPG')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Transporte aeromédico.
                  </h3>
                  Contamos com uma tripulação experiente, qualificada, treinada, competente e em sintonia que atende os clientes de forma diferenciada com Transporte Aeromédico para todo o Brasil.

A equipe médica é composta de médicos e enfermeiros com capacitação aeromédica e com experiência comprovada em atendimento de urgência e emergência, suporte básico e avançado de vida, suporte de vida ao pacientes de trauma, suporte de vida pediátrico, suporte de vida no atendimento Pré Hospitalar, suporte de vida a gestante (BLS, ACLS, TLSN, ATLS, PALS, NALS), entre outros.

Nossas UTI´s Aéreas são dotadas de equipamentos modernos de última geração, atendemos a todos os requisitos previstos em regulamentação específica da ANAC , do Conselho Federal de Medicina e do Ministério da Saúde.
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
                  src={require('./../../assets/images/iaud2.jpg')} 
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
                O dom de cuidar pulsa no Coração desta empresa!
                  </h3>
                <p className="m-0">
                Remoção eletiva de pacientes, normalmente tem como finalidade a realização de exames, consultas, retorno para residência após alta hospitalar, mudança de residência e outros.

Serviço prestado em ambulância avançada (UTI), composta de maca retrátil, monitor cardíaco multiparâmetro, respirador, prancha a vácuo, bomba de infusão, suporte de soro, comadre, papagaio, estetoscópio, termômetro, glicosímetro, cilindro de O², maleta de materiais e medicamentos, dentre outros utensílios.

Remoção de pacientes em estado grave que muitas vezes precisam utilizar alguns aparelhos para suporte de vida. Tem como finalidade a internação hospitalar de emergência, transferência de unidade hospitalar entre outros. Serviço prestado em ambulância de suporte avançado, com estrutura para transporte adulto, pediátrico e neonatal. Realizamos remoções para todo o BRASIL.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/iaud3.jpg')}
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