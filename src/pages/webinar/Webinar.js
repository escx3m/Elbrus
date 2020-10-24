import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';

import Widget from '../../components/Widget/Widget';

const Webinar = () => (
    <div>
        <h1 className="page-title">Лекции, вебинары</h1>
        <Row>
            <Col xs={12} md={6}>
                <Widget
                    title={<h5>Вебинар <small className="text-muted">О том о сем</small></h5>}
                    close collapse
                >
                    <p>Поделятся опытом "О том и о сем:)"</p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <iframe max-width="520" width="100%" height="200" src="https://www.youtube.com/embed/ghZEqurRXPs"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
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
                        <iframe max-width="520" width="100%" height="517" src="https://www.youtube.com/embed/2nSpEljzQnY"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </Widget>
            </Col>
        </Row>
    </div >
);

export default Webinar;
