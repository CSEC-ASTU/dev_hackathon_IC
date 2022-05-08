import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { getFeaturedPosts } from '../actions/posts';
import Posts from '../components/Posts/Posts';
import logo from '../images/TPED.png';
import team from '../images/bg.svg';

//this is the styling used for the homepage using u-styles in CSS
const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    left: 0,
    top: '20%',
    zIndex: 10,
  },
  gridContainer: {
    paddingTop: "130px"
  }
}));

//this is the exportable used for display on the actual subpage
const Home = () => {

  //defines the consts used in the exportable
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  //this useEffect dispatches the function that gets all of the featured posts (projects that have the boolean marked as true in the database)-
  //-for display on the homepage
  useEffect(() => {
    dispatch(getFeaturedPosts());
  }, [currentId, dispatch]);

  //this is the returned part of the exportable that is actually dispalyed to the home page
  return (

    //has grids that display all of the static information pertaining to the club's general information
    //calls the useEffect that dispatches the function that gets all of the featured posts then displays them at bottom of the home page
    <Grow in>
      <Container>
        <Grid container justify="center" alignItems="center" direction="column" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12}>
            <img src={logo} alt="" style={{width: "600px"}}/>;
          </Grid>
          <Grid item xs={12}>
            <Typography component="h1" variant="h4" align="center" style={{color: "white"}}>
             CSEC-ASTU is a university club working to enhance technology through competetive programming and production of market standard software.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5" align="center" style={{color: "white"}}>
             CSEC-ASTU in fame
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={team} alt="" style={{width: "400px"}}/>;
          </Grid>
          <Grid item xs={12}>
            <Typography component="h1" variant="h4" align="center" style={{color: "white"}}>
              Competitive Devision
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5" align="center" style={{color: "white"}}>
              This where we are working to impress the problem itself.
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h2" align="center" style={{color: "white"}}>
              This week's CPD dashboard
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>

      </Container>
    </Grow>

  );
};

export default Home;


