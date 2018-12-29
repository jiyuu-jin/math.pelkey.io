import Input from '@material-ui/core/Input';
import * as React from 'react';
import {stringify} from "querystring";


const gameObject = {
    mode: "countdown",
    timePerProb: 15
};



export default class GameView extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            value: '',
            num1: 0,
            num2: 0,
            operator: "+",
            answer: 0,
            timer: true,
            score: 0,
            time: 0
        };
        this.deleteValue = this.deleteValue.bind(this);
        this.checkNumber = this.checkNumber.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.tickTimer = this.tickTimer.bind(this);
    }

    public addValue(value: string){
        this.setState({value: this.state.value + value},() => {
            this.checkNumber()
        });
    }

    public deleteValue(){
        this.setState({value: this.state.value.slice(0, -1)})
    }

    public addScore(){
        this.setState({score: this.state.score + 10});
    }

    public checkNumber(){
        const currentValue = parseInt(this.state.value, 10);
        if( currentValue === this.state.answer){
            console.log(currentValue);
            this.addScore();
            this.generateProblem();
            const value = "";
            this.setState({value})
        }
    }

    public tickTimer(){
        this.setState({time: this.state.time + 1});
        console.log("time", this.state.time)
        this.startTimer(gameObject.timePerProb)
    }

    public startTimer(timePerProb: number){
        const interval = (1000 / timePerProb);
        if(this.state.time < 100){
            window.setTimeout(this.tickTimer,interval);
        }else{
            this.setState({time: 0});
            this.startTimer(timePerProb)
        }
    }


    public generateProblem(){
        const num1 = Math.floor(Math.random() * 10 + 1);
        const num2 = Math.floor(Math.random() * 10 + 1);
        const answer = num1 + num2;
        this.setState({num1, num2, answer});

        if(this.state.timer === true){
            this.startTimer(gameObject.timePerProb)
        }
    }

    public componentDidMount(){
        this.generateProblem()
    }


    public render(){

       console.log((stringify(gameObject)));

        return (
            <div className="game">
                <h4 className="score">{this.state.score}</h4>

                <div id="timer">
                    <div style={{bottom: this.state.time}} id="timerFill"/>
                </div>

                <div className="problem">
                    <div id="num1">{this.state.num1}</div>

                    <div id="operator">{this.state.operator}</div>

                    <div id="num2">{this.state.num2}</div>
                </div>
                <div className="inputField">
                    <Input
                        value={this.state.value}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                </div>
                <div className="keyboard">
                    <div className="grid-container grid-container--fill">
                        <div onClick={this.addValue.bind(this, "1")} className="grid-element">
                            1
                        </div>
                        <div onClick={this.addValue.bind(this, "2")} className="grid-element">
                            2
                        </div>
                        <div onClick={this.addValue.bind(this, "3")} className="grid-element">
                            3
                        </div>
                        <div onClick={this.addValue.bind(this, "4")} className="grid-element">
                            4
                        </div>
                        <div onClick={this.addValue.bind(this, "5")} className="grid-element">
                            5
                        </div>
                        <div onClick={this.addValue.bind(this, "6")} className="grid-element">
                            6
                        </div>
                        <div onClick={this.addValue.bind(this, "7")}className="grid-element">
                            7
                        </div>
                        <div onClick={this.addValue.bind(this, "8")} className="grid-element">
                            8
                        </div>
                        <div onClick={this.addValue.bind(this, "9")} className="grid-element">
                            9
                        </div>
                        <div onClick={this.addValue.bind(this, "-")} className="grid-element">
                            -
                        </div>
                        <div onClick={this.addValue.bind(this, "0")} className="grid-element">
                            0
                        </div>
                        <div onClick={this.deleteValue} className="grid-element">
                            ⬅
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
