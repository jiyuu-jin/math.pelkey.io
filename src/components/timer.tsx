import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    root: {
        flexGrow: 1,
    },
};

export class Timer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            completed: 0,
            time: null
        };
    }

    public componentDidMount() {
        const timer = setInterval(this.progress, 500);

        this.setState({
            time: timer
        });

        this.setState({})
    }

    public componentWillUnmount() {
        clearInterval(this.state.time);
    }

    public progress = () => {
        const { completed } = this.state;
        if (completed === 100) {
            this.setState({ completed: 0 });
        } else {
            const diff = 5;
            this.setState({ completed: Math.min(completed + diff, 100) });
        }
    };

    public render() {
        const { classes } = this.props;
        return (
            <div id="timer" className={classes.root}>
                <LinearProgress variant="determinate" value={this.state.completed} />
                <br />
                <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
                <CircularProgress
                    className={classes.progress}
                    variant="determinate"
                    value={this.state.completed}
                />
            </div>
        );
    }
}


export default withStyles(styles)(Timer);