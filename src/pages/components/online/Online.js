import React, { useState, useEffect } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Badge,
} from 'reactstrap';
import classnames from 'classnames';
import { toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import data from '../../../data.json';
import s from './Icons.module.scss';
import { COURSES_BASE_URL } from '../../../config';

const Online = () => {
  const [state, setState] = useState({
    page: 'online',
    options: {
      position: 'top-right',
      autoClose: 5000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    },
    tabs: [],
    activeTab: '1',
  });

  useEffect(() => {
    // if (state.tabs.length === 0) {
    const tabs = data.pages[state.page].tabs;
    setState({ ...state, tabs });
    // }
  }, []);

  const toggle = tab => {
    if (state.activeTab !== tab) {
      setState({ ...state, activeTab: tab });
    }
  };

  return (
    <section className={`${s.root} mb-4`}>
      <h1 className='page-title'>Онлайн мероприятия</h1>

      <Nav className='bg-transparent' tabs>
        {state.tabs.map(tab => (
          <NavItem key={`${state.page}- ${tab.id}`}>
            <NavLink
              className={classnames({
                active: state.activeTab === `${tab.id}`,
              })}
              onClick={() => {
                toggle(`${tab.id}`);
              }}
            >
              <span className='mr-xs'>{tab.name}</span>
              <Badge color='primary'>{tab.id === '1' ? 'new' : ''}</Badge>
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <TabContent activeTab={state.activeTab}>
        {state.tabs.map(tab => {
          const tabMeetups = tab.meetups;

          return (
            <TabPane tabId={tab.id} key={`tab-pane-${tab.id}`}>
              <Row className='icon-list' key={`${tab.id}-header`}>
                <Col md={2} lg={2} xs={12} className='list-item'>
                  Дата
                </Col>
                <Col md={1} lg={1} xs={12} className='list-item'>
                  Время
                </Col>
                <Col md={2} lg={2} xs={12} className='list-item'>
                  Тема
                </Col>
                <Col md={2} lg={2} xs={12} className='list-item'>
                  Спикер
                </Col>
                <Col md={2} lg={2} xs={12} className='list-item'>
                  Реферальная ссылка
                </Col>
                <Col md={3} lg={3} xs={12} className='list-item'>
                  Ссылка
                </Col>
              </Row>

              {tabMeetups.map(meetup => {
                console.log('tab = ', tab);
                console.log('meetup ', meetup);

                const meetupDate = new Date(meetup.startDate).toString();
                const meetupLink = meetup.link;
                return (
                  <Row
                    className='icon-list'
                    key={`meetup${tab.id}-${meetup.id}`}
                  >
                    <Col md={2} lg={2} xs={12} className='list-item'>
                      {meetupDate}
                    </Col>
                    <Col md={1} lg={1} xs={12} className='list-item'>
                      10:00
                    </Col>
                    <Col md={2} lg={2} xs={12} className='list-item'>
                      <a
                        href='https://rsv.ru/edu/courses/10/185/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {meetup.title}
                      </a>
                    </Col>
                    <Col md={2} lg={2} xs={12} className='list-item'>
                      Мария Гладышева
                    </Col>
                    <Col md={2} lg={2} xs={12} className='list-item'>
                      <CopyToClipboard
                        text={`${COURSES_BASE_URL}/${1}/${334}`}
                        onCopy={text => {
                          setState({ ...state, refLink: text, copied: true });
                          toast.success('Ссылка скопирована в буфер обмена', {
                            position: 'bottom-right',
                            autoClose: 5000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                          });
                        }}
                      >
                        <button className='mr-1 btn btn-success btn-xs'>
                          Создать
                        </button>
                      </CopyToClipboard>
                    </Col>
                    <Col md={3} lg={3} xs={12} className='list-item'>
                      {state.refLink}
                    </Col>
                  </Row>
                );
              })}
            </TabPane>
          );
        })}
      </TabContent>
    </section>
  );
};

export default Online;
