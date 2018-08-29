import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Router from 'next/router';

import {
  HeaderWithMenu, SimpleCard,
} from '../..';

const styles = {
  container: {
    'overflow-x': 'hidden',
  },
};

class Home extends React.PureComponent {
  state = {
    loggedIn: true,
  }

  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    error: PropTypes.string,
  };

  static defaultProps = {
    error: undefined,
  };

  handleLogIn = () => {
    Router.push({
      pathname: 'https://github.com/login/oauth/authorize',
      query: {
        client_id: process.env.GITHUB_CLIENT_ID,
      },
    });
  };

  render() {
    // const { props: { classes, error }, state: { loggedIn }, handleLogIn } = this;

    return (
      <div>
        {/* <HeaderWithMenu loggedIn={loggedIn} handleLogIn={handleLogIn} /> */}
        <div style={{ padding: 12 }}>
          {/* {error && <p>{error}</p>} */}
          <Grid container spacing={24} style={{ padding: 24 }}>
            <Grid item xs={6} sm={4} lg={3} xl={2}>
              asgasg
              <SimpleCard title="Title" description="Description" />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
