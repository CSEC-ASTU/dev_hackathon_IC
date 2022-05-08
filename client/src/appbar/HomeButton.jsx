import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '@material-ui/core/SvgIcon';

//this ActionHome exportable is what is dispalyed at the top of every page and subpage of the website that if clicked redirects to the homepage
let ActionHome = (props) => (
  <SvgIcon style={{fontSize: '148px'}} viewBox="0 0 576.38 194.54" {...props}>
      </SvgIcon>
);
ActionHome = pure(ActionHome);
ActionHome.displayName = 'ActionHome';
ActionHome.muiName = 'SvgIcon';

export default ActionHome;