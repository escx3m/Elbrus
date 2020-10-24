import React from 'react';
import {
  Row,
  Col,
  Table,
  Badge,
} from 'reactstrap';

import Widget from '../../../components/Widget';
import s from './Static.module.scss';

class Static extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.root}>
        <h2 className="page-title">Пользователи</h2>
        <Row>
          <Col lg={12}>
            <Widget
              title={<h5>Все пользователи</h5>} settings close
            >
              <div className="table-responsive">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Фамилия</th>
                      <th>Имя</th>
                      <th>Отчество</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>Otto</td>
                      <td><a href="#">sam@example.com</a></td>
                      <td><Badge color="gray" className="text-secondary" pill>Приглашенный</Badge></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>Thornton</td>
                      <td><a href="#">fat.thor@example.com</a></td>
                      <td><Badge color="gray" className="text-secondary" pill>Не подтвержденный</Badge></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>the Bird</td>
                      <td><a href="#">larry@example.com</a></td>
                      <td><Badge color="primary" className="text-secondary" pill>Новый</Badge></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Peter</td>
                      <td>Horadnia</td>
                      <td>Horadnia</td>
                      <td><a href="#">peter@example.com</a></td>
                      <td><Badge color="success" className="text-secondary" pill>Активный</Badge></td>
                    </tr>
                  </tbody>
                  {/* eslint-enable */}
                </Table>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }

}

export default Static;
