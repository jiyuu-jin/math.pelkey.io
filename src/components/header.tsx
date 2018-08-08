import * as React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="title" color="inherit">
        Let's Learn Math
        </Typography>
      </Toolbar>
    </AppBar>
    </div>

  );
}
