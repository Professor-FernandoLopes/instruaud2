import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { KEYS } from '../i18n'
import { useIntl } from 'react-intl'


import RoadmapHeader from '../components/sections/RoadmapHeader';

function Roadmap() {
    const intl = useIntl();
    return (
<div className="container-sm">
<RoadmapHeader className="illustration-section-01" />
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">{intl.formatMessage({ id: KEYS.INSTRUAUD_BEGINS_OPERATIONS })}</h3>
    <h4 className="vertical-timeline-element-subtitle">Porto Velho, Rondônia</h4>
    <p>
    {intl.formatMessage({ id: KEYS.INSTRUAUD_BEGINS_OPERATIONS2 })}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">{intl.formatMessage({ id: KEYS.EXPANTION_BEGINS })}</h3>
    <p>
     
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">{intl.formatMessage({ id: KEYS.BLOCKCHAIN_IDEALIZATION })}</h3>
    <p>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 Q1"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">{intl.formatMessage({ id: KEYS.TOKENIZE_COMPANY_ASSETS })}</h3>
    <p>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 Q2"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">{intl.formatMessage({ id: KEYS.PRESALES })}</h3>
    <p>
    {intl.formatMessage({ id: KEYS.MARKETING_LAUNCH })}
    </p>
    <p>
    {intl.formatMessage({ id: KEYS.BEGIN_PRESALES })}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
       className="vertical-timeline-element--work"
       contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
       date="2021 Q3"
       iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
     >
       <h3 className="vertical-timeline-element-title">{intl.formatMessage({ id: KEYS.IDO })}</h3>
       <p>
         Binance Smart Chain
       </p>
       <p>
         Ethereum
       </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
       className="vertical-timeline-element--work"
       contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
       date="2021 Q3"
       iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
     >
       <h3 className="vertical-timeline-element-title">Manaus</h3>
       <p>
       {intl.formatMessage({ id: KEYS.BEGINS_OPERATIONS_FIRST_EXPANTION })}
       </p>
       <p>
       
       </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
       className="vertical-timeline-element--work"
       contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
       date="2021 Q4"
       iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
     >
       <h3 className="vertical-timeline-element-title"> {intl.formatMessage({ id: KEYS.LAUNCH_STAKING })}</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
       className="vertical-timeline-element--work"
       contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
       date="2022"
       iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
     >
       <h3 className="vertical-timeline-element-title">{intl.formatMessage({ id: KEYS.NEXTYEAR })}</h3>
       <p>
       {intl.formatMessage({ id: KEYS.YIELD_DIST })}
       </p>
       <p>
       {intl.formatMessage({ id: KEYS.NEW_EXPANTIONS })}
       </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}

  />
</VerticalTimeline>
</div>
    )
}

export default Roadmap
