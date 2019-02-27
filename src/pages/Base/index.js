import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withRoot from "../../withRoot";
import { withStyles } from "@material-ui/core/styles";

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
        <div className={classes.ml5}>{children}</div>
      </div>
    );
  }
}

Base.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Base));
