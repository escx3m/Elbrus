import React from 'react';
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

class Online extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      eventType: 'online',
      options: {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
      },
      activeTab: '1',
      tabs: [
        {
          id: 1,
          name: 'Деловые игры',
          meetups: [
            {
              date: 1231231231231,
              link: 'dfasdfasdf',
              name: '12313213123',
            },
          ],
        },
        {
          id: 2,
          name: 'Программирование',
          meetups: [],
        },
        {
          id: 3,
          name: 'Дизайн',
          meetups: [],
        },
        {
          id: 4,
          name: 'Финансы',
          meetups: [],
        },
        {
          id: 5,
          name: 'Мотивация',
          meetups: [],
        },
        {
          id: 6,
          name: 'Маркетинг',
          meetups: [],
        },
        {
          id: 7,
          name: 'SMM',
          meetups: [],
        },
        {
          id: 8,
          name: 'Аналитика',
          meetups: [],
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({});
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  createRefLink(userFromId, eventId) {
    const refLink = `${COURSES_BASE_URL}/?fromUser=${userFromId}&eventId=${eventId}`;
    this.setState({ refLink });
  }

  render() {
    return (
      <section className={`${s.root} mb-4`}>
        <h1 className='page-title'>Онлайн мероприятия</h1>

        <Nav className='bg-transparent' tabs>
          {this.state.tabs.map(tab => (
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === `${tab.id}`,
                })}
                onClick={() => {
                  this.toggle(`${tab.id}`);
                }}
              >
                <span className='mr-xs'>{tab.name}</span>
                <Badge color='primary'>{tab.id === '1' ? 'new' : ''}</Badge>
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          {this.state.tabs.map(tab => (
            <TabPane tabId={tab.id}>
              <Row className='icon-list' id={this.state.activeTab}>
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

              {tab.meetups.map(meetup => {
                const meetupDate = new Date(meetup.date).toString();

                const meetupLink = meetup.link;
                return (
                  <Row className='icon-list' id={`${tab.id}-${meetup.id}`}>
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
                      >
                        {meetup.name}
                      </a>
                    </Col>
                    <Col md={2} lg={2} xs={12} className='list-item'>
                      Мария Гладышева
                    </Col>
                    <Col md={2} lg={2} xs={12} className='list-item'>
                      <CopyToClipboard
                        text={`${COURSES_BASE_URL}/${1}/${334}`}
                        onCopy={text => {
                          this.setState({ refLink: text, copied: true });
                          toast.success('Ссылка скопирована в буфер обмена', {
                            position: 'bottom-right',
                            autoClose: 5000,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                          });
                        }}
                      >
                        <button class='mr-1 btn btn-success btn-xs'>
                          Создать
                        </button>
                      </CopyToClipboard>
                    </Col>
                    <Col md={3} lg={3} xs={12} className='list-item'>
                      {this.refLink}
                    </Col>
                  </Row>
                );
              })}
            </TabPane>
          ))}
        </TabContent>
      </section>
    );
  }
}

export default Online;
