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
    paragraph: 'Como o dom de cuidar pulsa no coração da Instruaud, não cansamos de investir em sua saúde, sendo a venda do token Instruaud destinada a compra destes e outros insumos: '
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
                  01 aeronave king Air B200 ou 
similar homologada para UTI aérea e mais 15 Vans tipo Mercedes Bens Modelo 
416, implementação e acessórios para transformação em AMBULÂNCIA UTI
tipo “D”, aparelhos, equipamentos e insumos diversos, componentes finais do 
processo de transformação dos veículos.  
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
                  Ambulância de Suporte Avançado Tipo D (UTI Móvel) – Veículo destinado ao 
atendimento e transporte de pacientes de alto risco em emergências pré-hospitalares  e/ou de transporte inter-hospitalar que necessitam de cuidados 
médicos intensivos. Devendo contar com os equipamentos médicos necessários 
e profissionais habilitados para esta função.
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
                  Aeronave (bimotora turboélice) requisitos mínimos obrigatórios:a) Deverá conter todos os equipamentos descritos para ambulâncias de suporte 
avançado, tanto adulto como infantil e neonatal, com as adaptações necessárias 
para o uso em ambientes hiperbáricos, homologados pelos órgãos competentes, 
conforme resolução CFM nº. 1.671, de 9 de julho de 2003; b) Tripulante(s): Um 
piloto e um co piloto; c) Equipe médica: Um médico e um enfermeiro; d) 
Passageiros: Um paciente e um acompanhante.
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