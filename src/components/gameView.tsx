import Input from '@material-ui/core/Input';
import * as React from 'react';
import { Link } from 'react-router-dom';
import gameConfig from '../gameConfig.js'
import queryString from 'querystring';


export default class GameView extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        const parsed = queryString.parse(props.location.search);

        const converted = Number(parsed.level) - 1;

        const game = gameConfig.addition[converted];
        console.log(gameConfig.addition[converted]);

        console.log(parsed.operation, parsed.level);

        this.state = {
            value: '',
            mode: game.mode,
            pointGoal: game.pointGoal,
            num1: 0,
            num2: 0,
            operation: parsed.operation,
            answer: 0,
            timer: true,
            timeLimit: game.timeLimit,
            score: 0,
            time: 0,
            success: null
        };

        this.deleteValue = this.deleteValue.bind(this);
        this.checkNumber = this.checkNumber.bind(this);
        this.startGame =  this.startGame.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.tickTimer = this.tickTimer.bind(this);
        this.endGame = this.endGame.bind(this);
        this.getOperator = this.getOperator.bind(this)
    }

    public getOperator(opertation:string){
        const operations = ["addition", "subtraction", "multiplication", "division"];
        const operators = ["+", "-" ,"*", "/"];
        const index = operations.indexOf(opertation);
        return operators[index]
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
        console.log("time", this.state.time);
        this.startTimer(15)
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

    public endGame(){
        if(this.state.mode === "countdown"){
            if(this.state.pointGoal < this.state.score){
                this.setState({success: true});
            }else{
                this.setState({success: false});
            }
        }
    }

    public startGame(){
        if(this.state.timer === true){
            this.startTimer(15)
        }

        setTimeout(this.endGame, this.state.timeLimit)

    }

    public generateProblem(){
        const num1 = Math.floor(Math.random() * 10 + 1);
        const num2 = Math.floor(Math.random() * 10 + 1);
        const answer = num1 + num2;
        this.setState({num1, num2, answer});
    }

    public componentDidMount(){
        this.generateProblem();
        this.startGame();
    }

    public render(){

        let gameOver = null;

        // Check if player won the game.
        switch(this.state.success) {
            case null:
                gameOver = null;
                break;
            case true:
                gameOver = <div id="gameOver">
                                <h1>You Win</h1>
                                <h2>Final Score in {this.state.timeLimit / 1000}s</h2>
                                <h2>{this.state.score} / {this.state.pointGoal}</h2>
                                <Link to="/addition">Return to Menu</Link>
                            </div>;
                break;
            case false:
                gameOver = <div id="gameOver">
                                 <h1>You Lose</h1>
                                 <h2>Final Score in {this.state.timeLimit / 1000}s</h2>
                                 <h2>{this.state.score} / {this.state.pointGoal}</h2>
                                 <Link to="/addition">Return to Menu</Link>
                            </div>;
                break;
        }

        return (
            <div className="game">
                {gameOver}
                <h4 className="score">{this.state.score}</h4>

                <div id="timer">
                    <div style={{bottom: this.state.time}} id="timerFill"/>
                </div>

                <div className="problem">
                    <div id="num1">{this.state.num1}</div>

                    <div id="operator">{this.getOperator(this.state.operation)}</div>

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
