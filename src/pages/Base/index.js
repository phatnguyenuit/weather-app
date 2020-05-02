import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import withRoot from "withRoot";

const styles = theme => ({
  root: {
    width: "100%",
    flexGrow: 1,
    wordWrap: "anywhere"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  link: {
    textDecoration: "none"
  },
  ml5: {
    marginLeft: "20px"
  }
});

class Base extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              <Link to="/" className={classes.link}>
                Weather App
              </Link>
            </Typography>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
        <Box className={classes.ml5} bgcolor="#f5f5f5">
          {children}
        </Box>
      </div>
    );
  }
}

Base.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Base));
