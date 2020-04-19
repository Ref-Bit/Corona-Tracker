import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Styles from './Cards.module.css';
import CountUp from 'react-countup';
import CX from 'classnames';
import i18next from 'i18next';  
import moment from 'moment/min/moment-with-locales.min.js';

const Cards = ( {data:{ confirmed, recovered, deaths, lastUpdate }, locale}) => {
  if(!confirmed){
    return 'Loading...';
  }

  return (
      <div className={Styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid item component={Card} xs={12} md={3} className={CX(Styles.card, Styles.infected)}>
            <CardContent>
              <Typography variant="h5" gutterBottom>{i18next.t('infected.title')}</Typography>
              <Typography variant="h6">
                <CountUp 
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">{moment(lastUpdate).format('LLL')}</Typography>
              <Typography variant="body2" className={Styles.body2}>{i18next.t('infected.desc')}</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={CX(Styles.card, Styles.recovered)}>
            <CardContent>
              <Typography variant="h5" gutterBottom>{i18next.t('recovered.title')}</Typography>
              <Typography variant="h6">
                <CountUp 
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">{moment(lastUpdate).format('LLL')}</Typography>
              <Typography variant="body2" className={Styles.body2}>{i18next.t('recovered.desc')}</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={CX(Styles.card, Styles.deaths)}>
            <CardContent>
              <Typography variant="h5" gutterBottom>{i18next.t('deaths.title')}</Typography>
              <Typography variant="h6">
                <CountUp 
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">{moment(lastUpdate).format('LLL')}</Typography>
              <Typography variant="body2" className={Styles.body2}>{i18next.t('deaths.desc')}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
  )
}

export default Cards;