import React, { Component } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    name: '',
    number: '',
    selected_number: '',
    play_url: ''
  };

  componentDidMount() {
  }

  handleSubmit = async e => {
    // let url = '/api';
    // const response = await fetch(url);
    // const body = await response.text();
    // this.setState({ play_url: body });
    const defaultOptions = {
      baseURL: 'http://kevin.giftkids.com.ua/api',
      timeout: 15*1000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9rZXZpbi5naWZ0a2lkcy5jb20udWFcL2FwaVwvbG9naW4iLCJpYXQiOjE1NzQ2OTczMDAsImV4cCI6MTU3NDcwMDkwMCwibmJmIjoxNTc0Njk3MzAwLCJqdGkiOiJwS01WZU55MUVybnp5bE9ZIiwic3ViIjoxMSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.2mJnG1YTbGGvRbIAADqtSu6l4caYDSv97GGpQTvS-2U'
      }
    }
    let instance = axios.create(defaultOptions);
    let bodyFormData = new FormData();
    bodyFormData.set('email', 'test@test.com');
    bodyFormData.set('password', 'test');
    instance.post('/login', bodyFormData)
      .then(res => {
        console.log('res', res);
        if (res.data) {
          console.log('ddddddd', res.data);
        } else {
          console.log('fffffff');
        }
      }).catch((err) => {
        console.log('err', err.response);
      })
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <div className="viewer" style={{ height: '100px' }}>
            </div>
          </Col>
          <Col md={4}>
            <InputGroup className="md-3">
              <FormControl
                placeholder="Name"
                type="text"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </InputGroup>
          </Col>
          <Col md={2}>
            <InputGroup className="md-3">
              <FormControl
                placeholder="Number"
                type="number"
                value={this.state.number}
                onChange={e => this.setState({ number: e.target.value })}
              />
            </InputGroup>
          </Col>
          <Col md={2}>

          </Col>
          <Col md={4}>
            <Button type="button" onClick={e => this.handleSubmit()}>Play</Button>
          </Col>
        </Row>
        <p>{this.state.play_url}</p>
      </Container>
    );
  }
}

export default App;
