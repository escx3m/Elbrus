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
import uuid from 'uuid/v4';
import { toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import s from './Icons.module.scss';
import { COURSES_BASE_URL } from '../../../config';

class Online extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      options: {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
      },
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  createRefLink(userFromId, eventId) {
    // find user by userFromId
    // create
    //

    const refLink = `${COURSES_BASE_URL}/?fromUser=${userFromId}&eventId=${eventId}`;
    this.setState({ refLink });
  }

  render() {
    return (
      <section className={`${s.root} mb-4`}>
        <h1 className='page-title'>Онлайн мероприятия</h1>

        {/* tabs */}
        <Nav className='bg-transparent' tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              <span className='mr-xs'>Деловые игры</span>
              <Badge color='primary'>new</Badge>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              <span className='mr-xs'>Программирование</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3');
              }}
            >
              <span className='mr-xs'>Дизайн</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => {
                this.toggle('4');
              }}
            >
              <span>Финансы</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => {
                this.toggle('5');
              }}
            >
              <span>Мотивация</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => {
                this.toggle('6');
              }}
            >
              <span>Маркетинг</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => {
                this.toggle('7');
              }}
            >
              <span>SMM</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '8' })}
              onClick={() => {
                this.toggle('8');
              }}
            >
              <span className='mr-xs'>Аналитика</span>
              <Badge color='primary'>new</Badge>
            </NavLink>
          </NavItem>
        </Nav>

        {/* tab content */}

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='1'>
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
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                10:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/10/185/' target='_blank'>
                  Уроки лидерства
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
                  <button class='mr-1 btn btn-success btn-xs'>Создать</button>
                </CopyToClipboard>
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                {this.state.refLink}
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                11:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/2/269/' target='_blank'>
                  Урок памяти и славы
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Борис Изюмов
              </Col>
              <Col
                md={2}
                lg={2}
                xs={12}
                className='list-item'
                id={2}
                onClick={() => this.createRefLink(1, 2)}
              >
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                25 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                09:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/9/189/' target='_blank'>
                  Финансовая грамотность
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Олег Демиденко
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                12:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Светлана Грохотова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                14:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Инна Анисимова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
          </TabPane>

          {/* tab #2 */}
          <TabPane tabId='2'>
            <Row className='icon-list'>
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
                Действие
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                Ссылка
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                10:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/10/185/' target='_blank'>
                  Уроки лидерства
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Мария Гладышева
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                11:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/2/269/' target='_blank'>
                  Урок памяти и славы
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Борис Изюмов
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                25 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                09:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/9/189/' target='_blank'>
                  Финансовая грамотность
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Олег Демиденко
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                12:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Светлана Грохотова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                14:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Инна Анисимова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
          </TabPane>

          {/* tab #3 */}
          <TabPane tabId='3'>
            <Row className='icon-list'>
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
                Действие
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                Ссылка
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                10:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/10/185/' target='_blank'>
                  Уроки лидерства
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Мария Гладышева
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                11:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/2/269/' target='_blank'>
                  Урок памяти и славы
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Борис Изюмов
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                25 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                09:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/9/189/' target='_blank'>
                  Финансовая грамотность
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Олег Демиденко
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                12:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Светлана Грохотова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                14:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Инна Анисимова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
          </TabPane>

          {/* tab #4 */}
          <TabPane tabId='4'>
            <Row className='icon-list'>
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
                Действие
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                Ссылка
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                10:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/10/185/' target='_blank'>
                  Уроки лидерства
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Мария Гладышева
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                11:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/2/269/' target='_blank'>
                  Урок памяти и славы
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Борис Изюмов
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                25 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                09:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/9/189/' target='_blank'>
                  Финансовая грамотность
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Олег Демиденко
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                12:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Светлана Грохотова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                14:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Инна Анисимова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
          </TabPane>

          {/* tab #5 */}
          <TabPane tabId='5'>
            <Row className='icon-list'>
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
                Действие
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                Ссылка
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                10:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/10/185/' target='_blank'>
                  Уроки лидерства
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Мария Гладышева
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                11:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/2/269/' target='_blank'>
                  Урок памяти и славы
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Борис Изюмов
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                25 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                09:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/9/189/' target='_blank'>
                  Финансовая грамотность
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Олег Демиденко
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                12:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Светлана Грохотова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                14:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Инна Анисимова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
          </TabPane>

          {/* tab #6 */}
          <TabPane tabId='6'>
            <Row className='icon-list'>
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
                Действие
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                Ссылка
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                10:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/10/185/' target='_blank'>
                  Уроки лидерства
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Мария Гладышева
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                11:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/2/269/' target='_blank'>
                  Урок памяти и славы
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Борис Изюмов
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                25 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                09:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/9/189/' target='_blank'>
                  Финансовая грамотность
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Олег Демиденко
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                12:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Светлана Грохотова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                14:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Инна Анисимова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
          </TabPane>

          {/* tab #7 */}
          <TabPane tabId='7'>
            <Row className='icon-list'>
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
                Действие
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                Ссылка
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                10:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/10/185/' target='_blank'>
                  Уроки лидерства
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Мария Гладышева
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                11:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/2/269/' target='_blank'>
                  Урок памяти и славы
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Борис Изюмов
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                25 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                09:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/9/189/' target='_blank'>
                  Финансовая грамотность
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Олег Демиденко
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                12:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Светлана Грохотова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                14:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Инна Анисимова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
          </TabPane>

          {/* tab #8 */}

          <TabPane tabId='8'>
            <Row className='icon-list'>
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
                Действие
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                Ссылка
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                10:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/10/185/' target='_blank'>
                  Уроки лидерства
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Мария Гладышева
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                24 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                11:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/2/269/' target='_blank'>
                  Урок памяти и славы
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Борис Изюмов
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                25 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                09:00
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/9/189/' target='_blank'>
                  Финансовая грамотность
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Олег Демиденко
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                12:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Светлана Грохотова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
            <Row className='icon-list'>
              <Col md={2} lg={2} xs={12} className='list-item'>
                26 ноября 2020
              </Col>
              <Col md={1} lg={1} xs={12} className='list-item'>
                14:20
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                <a href='https://rsv.ru/edu/courses/1/334/' target='_blank'>
                  Женщина-Лидер
                </a>
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Инна Анисимова
              </Col>
              <Col md={2} lg={2} xs={12} className='list-item'>
                Создать реферальную ссылку
              </Col>
              <Col md={3} lg={3} xs={12} className='list-item'>
                <span className='refLink'>ссылка</span>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </section>
    );
  }
}

export default Online;
