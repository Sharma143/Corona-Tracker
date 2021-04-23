import React from 'react';
import styles from './App.module.css';
import { Cards, Charts, CountryPicker } from "./components"
import { fetchData } from "./api"
import { Card, Grid, Paper } from '@material-ui/core';
import Hicharts from "./components/Hicharts/Hicharts"
class App extends React.Component {
  state = {
    data: {},
    country: "",
  }
  async componentDidMount() {
    const fetchApi = await fetchData()
    this.setState({ data: fetchApi })
  }
  handlerCountryChange = async (country) => {
    const fetchApi = await fetchData(country)
    this.setState({ data: fetchApi, country: country })
  }
  render() {
    const { data, country } = this.state
    return (
      <div className={styles.App}>
        <div>
          <Paper elevation={2} style={{ background: "#b980800a" }}>
            <h1 className={styles.heading}>Corona Tracker</h1>
          </Paper>
        </div>
        <Card className={styles.card} style={{ background: "#b980800a" }}>
          <CountryPicker country={country} handlerCountryChange={this.handlerCountryChange} />
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={country ? 6 : 12}>
              <Cards data={data} country={country} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Hicharts data={data} country={country} />
            </Grid>
          </Grid>
          <Charts data={data} country={country} />
        </Card>
      </div>
    )
  }
}


export default App;
