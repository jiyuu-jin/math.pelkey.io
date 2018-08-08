import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import {
    TransitionGroup } from 'react-transition-group'
import '../styles/style.css'

import * as React from 'react';

export const Addition: React.StatelessComponent<{}> = () => {
    return (
        <TransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div className="test">
                <div>
                    <List>
                        <h3 className="heading">Warm Up</h3>
                        <Divider/>
                        <Link to="/game">
                            <ListItem button={true}>
                                <Avatar>
                                    <h5>1</h5>
                                </Avatar>
                                <ListItemText primary="Countdown" secondary="Cross 150 in 30 seconds"/>
                            </ListItem>
                        </Link>
                        <ListItem button={true}>
                            <Avatar>
                                <h5>2</h5>
                            </Avatar>
                            <ListItemText primary="Subtraction" secondary="Reach 200 in 45 seconds"/>
                        </ListItem>
                        <ListItem button={true}>
                            <Avatar>
                                <h5>3</h5>
                            </Avatar>
                            <ListItemText primary="Last Problems" secondary="Last for 20 problems"/>
                        </ListItem>
                        <ListItem button={true}>
                            <Avatar>
                                <h5>4</h5>
                            </Avatar>
                            <ListItemText primary="Last Time" secondary="Last for 45 seconds"/>
                        </ListItem>
                        <Divider/>
                        <h3 className="heading">Two Digit Addition</h3>
                        <Divider/>
                        <ListItem button={true}>
                            <Avatar>
                                <h5>1</h5>
                            </Avatar>
                            <ListItemText primary="Countdown" secondary="Cross 150 in 45 seconds"/>
                        </ListItem>
                        <ListItem button={true}>
                            <Avatar>
                                <h5>2</h5>
                            </Avatar>
                            <ListItemText primary="Subtraction" secondary="Reach 120 in 60 seconds"/>
                        </ListItem>
                        <ListItem button={true}>
                            <Avatar>
                                <h5>3</h5>
                            </Avatar>
                            <ListItemText primary="Last Problems" secondary="Last for 15 problems"/>
                        </ListItem>
                        <ListItem button={true}>
                            <Avatar>
                                <h5>4</h5>
                            </Avatar>
                            <ListItemText primary="Last Time" secondary="Last for 60 seconds"/>
                        </ListItem>
                    </List>
                </div>
            </div>
        </TransitionGroup>
    );
}
