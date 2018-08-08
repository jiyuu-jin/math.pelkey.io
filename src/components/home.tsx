import * as React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

export const Home: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <List>
        <Link to="/addition">
          <ListItem button={true}>
          <Avatar>
           <h6>A + B</h6>
          </Avatar>
          <ListItemText primary="Addition" />
        </ListItem>
        </Link>
        <Link to="/subtraction">
          <ListItem button={true}>
            <Avatar>
              <h6>A - B</h6>
            </Avatar>
            <ListItemText primary="Subtraction" />
          </ListItem>
        </Link>
        <ListItem button={true}>
          <Avatar>
            <h6>A * B</h6>
          </Avatar>
          <ListItemText primary="Multiplication" />
        </ListItem>
        <ListItem button={true}>
          <Avatar>
            <h6>A / B</h6>
          </Avatar>
          <ListItemText primary="Division" />
        </ListItem>
      </List>
    </div>
  );
}
