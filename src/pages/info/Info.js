import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';

import Widget from '../../components/Widget/Widget';

const Info = () => (
    <div>
        <h1 className="page-title">Персональные данные</h1>
        <Row>
            <Col xs={12} md={6}>
                <Widget
                    title={<h5>123</h5>}
                    close collapse
                >
                    <p>Поделятся опытом "О том и о сем:)"</p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                    </div>
                </Widget>
            </Col>
            <Col xs={12} md={6}>
                <Widget
                    title={<h5>Вебинар <small className="text-muted">О всем</small></h5>}
                    close collapse
                >
                    <p>Поделятся опытом "О всем:)"</p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                    </div>
                </Widget>
            </Col>
        </Row>
    </div >
);

export default Info;
