import React from 'react'
import { Grid, Card, CardContent, Typography, CardActionArea } from '@material-ui/core';
import CountUp from "react-countup"
import styles from "../Cards/Cards.module.css"

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {
    if (!confirmed) {
        return "loading...";
    }
    return (
        <div>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={country ? 12 : 4}>
                    <Card className={styles.root}>
                        <CardActionArea>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Number of confirmed cases
                            </Typography>
                                <Typography variant="h5" component="h2" style={{ color: "cornflowerblue" }}>
                                    <CountUp
                                        start={0}
                                        end={confirmed.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                </Typography>
                                <Typography color="textSecondary" >
                                    {new Date(lastUpdate).toDateString()}
                                </Typography>
                                <Typography className={styles.pos} color="textSecondary">
                                    Number of active cases-covid-19
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={country ? 12 : 4}>
                    <Card className={styles.root}>
                        <CardActionArea>
                            <CardContent>
                                <Typography className={styles.title} color="textSecondary" gutterBottom>
                                    Number of recovered cases
                            </Typography>
                                <Typography variant="h5" component="h2" style={{ color: "darkseagreen" }}>
                                    <CountUp
                                        start={0}
                                        end={recovered.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                </Typography>
                                <Typography color="textSecondary" >
                                    {new Date(lastUpdate).toDateString()}
                                </Typography>
                                <Typography className={styles.pos} color="textSecondary">
                                    Number of recovered cases-covid-19
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={country ? 12 : 4}>
                    <Card className={styles.root}>
                        <CardActionArea>
                            <CardContent>
                                <Typography className={styles.title} color="textSecondary" gutterBottom>
                                    Number of deaths
                            </Typography>
                                <Typography variant="h5" component="h2" style={{ color: "crimson" }}>
                                    <CountUp
                                        start={0}
                                        end={deaths.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                </Typography>
                                <Typography color="textSecondary" >
                                    {new Date(lastUpdate).toDateString()}
                                </Typography>
                                <Typography className={styles.pos} color="textSecondary">
                                    Number of deaths-covid-19
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid >
        </div >
    );
}

export default Cards
