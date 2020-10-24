import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import { Alert, Button, FormGroup, Label, InputGroup, Input } from 'reactstrap';
import Widget from '../../components/Widget';

const Info = props => {
  const [user, setUser] = useState({});

  const changeField = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    // axios.get();
  }, []);

  useEffect(() => {
    console.log('user ', user);
  }, [user]);

  return (
    <div>
      <h1 className='page-title'>Персональные данные</h1>
      <Row>
        <Col xs={12} md={6}>
          <Widget title={<h5>Личная информация</h5>} close collapse>
            <form
              onSubmit={() => {
                console.log('submit form');
              }}
            >
              {props.errorMessage && (
                <Alert
                  className='alert-sm widget-middle-overflow rounded-0'
                  color='danger'
                >
                  {props.errorMessage}
                </Alert>
              )}
              <FormGroup className='mt'>
                <Label for='surname'>Фамилия</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='surname'
                    className='input-transparent pl-3'
                    value={user.surname}
                    onChange={changeField}
                    required
                    name='surname'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='name'>Имя</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='name'
                    className='input-transparent pl-3'
                    value={user.name}
                    onChange={changeField}
                    required
                    name='name'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='partonimyc'>Отчество</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='patronimyc'
                    className='input-transparent pl-3'
                    value={user.patronimyc}
                    onChange={changeField}
                    name='patronimyc'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='email'>Почта</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='email'
                    className='input-transparent pl-3'
                    value={user.email}
                    onChange={changeField}
                    type='email'
                    required
                    name='email'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='password'>Пароль</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='password'
                    className='input-transparent pl-3'
                    value={user.password}
                    onChange={changeField}
                    type='password'
                    required
                    name='password'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='phone'>Номер телефона</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='phone'
                    className='input-transparent pl-3'
                    value={user.phone}
                    onChange={changeField}
                    type='phone'
                    required
                    name='phone'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='birthday'>Дата рождения</Label>
                <InputGroup className='input-group-no-border'>
                  <Input
                    id='birthday'
                    className='input-transparent pl-3'
                    value={user.birthday}
                    onChange={changeField}
                    type='date'
                    required
                    name='birthday'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for='birthday'>Пол</Label>
                <InputGroup className='input-group-no-border'>
                  <select
                    name='gender'
                    id='gender'
                    class='input-transparent pl-3 form-control'
                    onChange={changeField}
                  >
                    <option value='male'>Мужской</option>
                    <option value='female'>Женский</option>
                  </select>
                </InputGroup>
              </FormGroup>
              <FormGroup style={{ textAlign: 'center' }}>
                <Button
                  type='submit'
                  className='btn btn-default input-group-no-border'
                  style={{ color: '#000' }}
                >
                  {'Сохранить'}
                </Button>
              </FormGroup>
            </form>
          </Widget>
        </Col>
        <Col xs={12} md={6}>
          <Widget title={<h5>Образование</h5>} close collapse>
            <FormGroup>
              <select
                name='education'
                id='education'
                class='input-transparent pl-3 form-control'
                onChange={changeField}
              >
                <option value='school'>Школьник</option>
                <option value='middle'>Среднее</option>
                <option value='middleplus'>Среднее специальное</option>
                <option value='graduate'>Высшее</option>
                <option value='postgraduate'>Аспирантура</option>
                <option value='doctoral'>Ученая степень</option>
              </select>
            </FormGroup>
            <FormGroup>
              <Label for='organization'>Учебное заведение</Label>
              <InputGroup className='input-group-no-border'>
                <Input
                  id='organization'
                  className='input-transparent pl-3'
                  value={user.organization}
                  onChange={changeField}
                  name='organization'
                />
              </InputGroup>
            </FormGroup>
          </Widget>
        </Col>
      </Row>
    </div>
  );
};

export default Info;