import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import '../styles/style.css'

import * as React from 'react';

export const Addition: React.StatelessComponent<{}> = () => {
    return (
            <div className="test">
                <div>
                    <List>
                        <h3 className="heading">Warm Up</h3>
                        <Divider/>
                        <Link to="/game?test=true&level=1&operation=addition">
                            <ListItem button={true}>
                                <Avatar>
                                    <h5>1</h5>
                                </Avatar>
                                <ListItemText primary="Count Down" secondary="Cross 150 in 30 seconds"/>
                            </ListItem>
                        </Link>
                        <Link to="/game?test=true&level=2&operation=addition">
                        <ListItem button={true}>
                            <Avatar>
                                <h5>2</h5>
                            </Avatar>
                            <ListItemText primary="Reach Target" secondary="Reach 200 in 45 seconds"/>
                        </ListItem>
                        </Link>
                        <Link to="/game?test=true&level=3&operation=addition">
                        <ListItem button={true}>
                            <Avatar>
                                <h5>3</h5>
                            </Avatar>
                            <ListItemText primary="Last Problems" secondary="Last for 20 problems"/>
                        </ListItem>
                        </Link>
                        <Link to="/game?test=true&level=4&operation=addition">
                        <ListItem button={true}>
                            <Avatar>
                                <h5>4</h5>
                            </Avatar>
                            <ListItemText primary="Last Time" secondary="Last for 45 seconds"/>
                        </ListItem>
                        </Link>
                        <Divider/>
                        <h3 className="heading">Two Digit Addition</h3>
                        <Divider/>
                        <Link to="/game?test=true&level=5&operation=addition">
                        <ListItem button={true}>
                            <Avatar>
                                <h5>5</h5>
                            </Avatar>
                            <ListItemText primary="Countdown" secondary="Cross 150 in 45 seconds"/>
                        </ListItem>
                        </Link>
                        <Link to="/game?test=true&level=6&operation=addition">
                        <ListItem button={true}>
                            <Avatar>
                                <h5>6</h5>
                            </Avatar>
                            <ListItemText primary="Subtraction" secondary="Reach 120 in 60 seconds"/>
                        </ListItem>
                        </Link>
                        <Link to="/game?test=true&level=7&operation=addition">
                        <ListItem button={true}>
                            <Avatar>
                                <h5>7</h5>
                            </Avatar>
                            <ListItemText primary="Last Problems" secondary="Last for 15 problems"/>
                        </ListItem>
                        </Link>
                        <Link to="/game?test=true&level=8&operation=addition">
                        <ListItem button={true}>
                            <Avatar>
                                <h5>8</h5>
                            </Avatar>
                            <ListItemText primary="Last Time" secondary="Last for 60 seconds"/>
                        </ListItem>
                        </Link>
                    </List>
                </div>
            </div>
    );
};
