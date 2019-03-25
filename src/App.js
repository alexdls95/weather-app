import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { Grid, Row, Col } from 'react-flexbox-grid'
import LocationListContainer from './containers/LocationList'
import ForecastExtended from './components/ForecastExtended'
import './App.css';

const cities = [
  'Montevideo,uy',
  'New York, us',
  'Bogotá,col',
  'Madrid,es',
  'Lima,pe',
]





class App extends Component {

  constructor() {
    super ()
    this.state = {
      city: '',
    }
  }

  render() {
    const { city } = this.state
    return (
      <Grid>
      <Row>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationListContainer
            cities={cities}
            onSelectedLocation={this.handleSelectedLocation}
          />
        </Col>
        <Col xs={12} md={6}>
        <Paper>
          <div className="details">
          {
            city ?
              <ForecastExtended city={city}/>
            :
              <h2>Seleccione una ciudad</h2>
          }
            
          </div>
        </Paper>
        </Col>
      </Row>
      </Grid>
    );
  }
}
export default App
