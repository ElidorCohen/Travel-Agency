import { useState } from "react";
import "./GameTab.css";
import { flagsPaths } from "../constants/games";
import  Timer  from '../components/Timer/Timer';
import checkmark from "../images/checmmark.png";
import ReactCountryFlag from "react-country-flag"
import { users } from "../constants/users";
import { BiBarChart } from "react-icons/bi";
import { useEffect } from "react";


export const GameTab = ({ id, teamA, teamB, date, info, setModalContent, setModalOpen, setReFetch, bets, realGames, status }) => {
    let interval_id;
    const [scoreA, setScoreA] = useState();
    const [scoreB, setScoreB] = useState();
    const [realScoreA, setRealScoreA] = useState();
    const [realScoreB, setRealScoreB] = useState();
    const [adminCounter, setAdminCounter] = useState(0);
    const [timerAlert, setTimerAlert] = useState(true);
    const [isAvailableGame, setIsAvailableGame] = useState(new Date() < date);
    const [betInProgress, setBetInProgress] = useState(false);

    useEffect(() => {
        return clearInterval(interval_id);
    }, [])

    interval_id = setInterval(() => {
        setIsAvailableGame(new Date() < date);
    }, 10000);

    const betRecivedContent = () =>{
        return(
            <div style={{
                "display": "flex",
                "alignContent": "center",
                "flexDirection": "column",
                "height": "100%",
                "alignItems": "center",
                /* justify-content: center; */
                "fontSize": "1rem",
                "textAlign": "center",
                /* overflow: scroll; */
            }}>
                <div>
                    <img src={checkmark} />
                </div>
                <div>
                    Your bet has received! <br/>
                    Good luck!
                </div>

            </div>
        )
    }

     

    const betOnGame = async () => {
        let msg = betRecivedContent()
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gameId: id, teamA: teamA, teamB: teamB, scoreA: scoreA, scoreB: scoreB, userId: window.USER_ID }),
        };
        try {
            setBetInProgress(true);
            // let response = await fetch("http://127.0.0.1:5000/games/bet-on-game", requestOptions);
            let response = await fetch("https://wc2022-server-k330-main-y62tkictza-wm.a.run.app/games/bet-on-game", requestOptions);
            let response_data = response.json()
            .then((data) => console.log(data));
            setBetInProgress(false);
            // updateConnectedUserName(`Hi, ${response_data?.msg}`)
            setModalContent(msg, "Nice bet bro!");
            setModalOpen(true);
            setReFetch(prev => !prev);
        } catch (e) {
            msg = "Faild to send bet, please try again"
            setModalContent(msg, "Nice bet bro!");
            setModalOpen(true);
            setBetInProgress(false);
        }
        // document.getElementById(`response-placeholder-${id}`).innerText = msg;

        // document.getElementById(`response-placeholder-${id}`).display = 'block';
 
        // setTimeout(() => {
        //     document.getElementById(`response-placeholder-${id}`).innerText = '';
        // }, 4000);
    }

    const betRealScore = async () => {
        setAdminCounter(0);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gameId: id, teamA: teamA, teamB: teamB, scoreA: realScoreA, scoreB: realScoreB, status: status }),
        };
        try {
            let response = await fetch("https://wc2022-server-k330-main-y62tkictza-wm.a.run.app/games/bet-real-score", requestOptions);
            //  let response = await fetch("http://127.0.0.1:5000/games/bet-real-score", requestOptions);
            let response_data = response.json()
            .then((data) => console.log(data));
            // updateConnectedUserName(`Hi, ${response_data?.msg}`)
        } catch (e) {
            console.log(e);
        }
        // document.getElementById("response-placeholder").innerText = msg;
    }
    
    const validateInput = () => {
        if(scoreA === undefined || scoreB === undefined || scoreA < 0 || scoreB < 0 || scoreA === '' || scoreB === '') return true;
        return false;
    }
    const getFlagIcon = () => {
        return  (
            <>
                <div 
                    style={{
                        "display":"flex",
                        "flexDirection":"row",
                        "justifyContent":"space-around",
                        "paddingTop": "15px"
                    }}
                >
                    <div style={{"justifyContent": "center", "verticalAlign": "center", width: "100px", textAlign: "center"}}>
                        <ReactCountryFlag
                            countryCode={flagsPaths[teamA]}
                            svg
                            style={{
                                width: '2em',
                                height: '2em',
                            }}
                            title={teamA}
                        />
                        <h4 style={{"paddingTop": "5px"}}>{teamA}</h4>
                    </div>
                    <h3 onClick={increaseAdminCount} style={{"paddingTop":"15px","textAlign":"center"}}>VS</h3>
                    
                    <div style={{"justifyContent": "center", "verticalAlign": "center", width: "100px", textAlign: "center"}}>
                    <ReactCountryFlag
                            countryCode={flagsPaths[teamB]}
                            svg
                            style={{
                                width: '2em',
                                height: '2em',
                            }}
                            title={teamB}
                        />
                        <h4 style={{"paddingTop": "5px"}}>{teamB}</h4>
                    </div>
                </div>
            </>
        )
    }
    
    const getDateTime = () => {
        return  (
            <>
               <div 
                    style={{
                        "display":"flex",
                        "flexDirection":"row",
                        "justifyContent":"space-evenly",
                        "paddingTop": "20px"
                    }}
                >
                    <div>
                        {date?.toLocaleDateString("he-IL")}
                    </div>
                    <div>
                        {date?.toLocaleTimeString("he-IL")}
                    </div>
                </div>
            </>
        )
    }

    const increaseAdminCount = () => {
        setAdminCounter((prevCounter) => prevCounter+1);
    }

    const getScoreGameEnd = (betA, betB) => {
        return  (
            <>
               <div id={`last-bet-${id}`}
                    style={{
                        "display": "none",
                        "flexDirection":"row",
                        "justifyContent":"space-evenly",
                        "paddingTop": "20px"
                    }}
                >
                    <h3 id={`last-betA-${id}`}>
                        {betA}
                    </h3>
                    <h3 id={`last-betB-${id}`} style={{fontStyle:"bold"}}>
                        {betB}
                    </h3>
                </div>
            </>
        )
    }

    const getGameTable = (data) => {
        clearInterval(interval_id);
        return (
            <table className="rank-table rank-table-tab ">
            <thead>
                <tr>
                    <th style={{width: "50px"}}>Name</th>
                    <th style={{width: "50px"}}>Bet</th>
                </tr>
            </thead>
            <tbody>
            {
                data?.map((betRow, index) => {
                    const user_id = betRow[1]
                    const score_a = betRow[3]
                    const score_b = betRow[4]
                    if(user_id !== undefined && score_a !== undefined && score_b !== undefined)
                    {
                        return (
                            <tr key={`${index}`}>
                                <td>{users[user_id]}</td>
                                <td>{`${score_a} - ${score_b}`}</td>
                            </tr>
                        )
                    }
                })
            }
            </tbody>
        </table>
        )
    }

    const showGameBets = async () => {
        try {
            let response = await fetch(`https://wc2022-server-k330-main-y62tkictza-wm.a.run.app/get-bets/${id}`);
            // let response = await fetch(`http://127.0.0.1:5000/get-bets/${id}`);
            let response_data = response.json()
            .then((data) => {
                setModalContent(getGameTable(data?.game_bets),`${teamA} - ${teamB}`);
                setModalOpen(true);
            })
        } catch (e) {
            console.log(e);
        }
    }

    const getBetString = () => {
        return (
            <div style={{padding: isAvailableGame ? "5px 0px 0px 0px" : "5px 0px 10px 0px"}}>
                {
                    Array.isArray(bets) && bets?.map((bet) => {
                        if(bet.id === id) {
                            return bet.value
                        }
                    })
                }
            </div>
        )
    }

    const gameTimer = () => {
        if(!isAvailableGame) return;
        // if(date - new Date() <= 1){
        //     setTimerAlert(true)
        // }
        console.log(timerAlert)
        return  (
            
            <div id={`timerWrapper-${id}`}>
                Time left:
                <Timer class={timerAlert ? 'one_min_left' : null }
                    gameDate={date}
                    gameTabId={id}
                    setTimerAlert={setTimerAlert}
                />
            </div>
        )
    }

    const getRealScoreGameEnd = () => {
        return (
            <div style={{fontStyle:"bold"}}>
                {
                    Array.isArray(realGames) && realGames.map((game, index) => {
                        if(game.id === id && game.scoreA !== undefined && game.scoreB !== undefined) {
                            const gamePoints = getMatchPoints(game.scoreA, game.scoreB);
                            return <>
                                <h3 key={index}>{game.scoreA} - {game.scoreB}</h3>
                                {gamePoints !== undefined ? <h4>{gamePoints}</h4> : undefined}
                                
                            </>
                        } 
                    })
                }
            </div>
        )
    }

    const getMatchPoints = (serverScoreA, serverScoreB) => {
        let bull_points = '+ 3 Points', part_points = '+ 1 Point';
        if(status === 'Eighth') {
            bull_points = '+ 4 Points';
            part_points = '+ 2 Points';
        }
        for(let bet of bets) {
            if(bet.id === id) {
                if (serverScoreA === bet.scoreA && serverScoreB === bet.scoreB) return bull_points;
                else if (serverScoreA > serverScoreB && bet.scoreA > bet.scoreB) return part_points;
                else if (serverScoreB > serverScoreA && bet.scoreB > bet.scoreA) return part_points;
                else if (serverScoreA == serverScoreB && bet.scoreA == bet.scoreB) return part_points;
                return '+ 0 Points';
            }
        }
    }

    return (
            <div className="game-tab-container" style={{marginBottom: "30px"}}>       
                {!isAvailableGame ? 
                    <div id="game-tab-overlay"
                        style={{
                            "display": "block"
                        }}
                    >
                        {getFlagIcon()}
                        <br></br>
                        {getRealScoreGameEnd()}
                        {getDateTime()}
                        {/* <br></br> */}
                        {getScoreGameEnd()}
                        <br></br>
                        {
                            info !== undefined && 
                            <br></br> &&
                            <p>{info}</p>

                        }
                        {
                            <BiBarChart style={{float: "right", height: "25px", width: "25px", marginRight: "10px"}} onClick={showGameBets}/>
                        }
                        <h3 style={{paddingLeft: "35px"}}>No more bet kapara!</h3> 
                        {/* {
                            serverGameID === id && serverScoreA !== undefined && serverScoreB !== undefined ? 
                            `Your current bet: ${serverScoreA} - ${serverScoreB}` : undefined
                        } */}
                        {getBetString(35)}
                    </div> 
                :
                 <>
                    <div style={{"paddingBottom":"10px"}}>
                        {getFlagIcon()}
                        <br></br>
                        {new Date().getDate() === date.getDate() ? gameTimer() : undefined}
                        {getDateTime()}
                        {
                            info !== undefined && 
                            <br></br> &&
                            <p>{info}</p>

                        }
                        <br></br>
                            <form onSubmit={(e) => {e.preventDefault(); betOnGame()}}>
                                <div className="bet-line">
                                    <input id="left-bet" style={{height: "30px", textAlign: "center"}} type="number" placeholder={teamA} onChange={(e)=>setScoreA(e.target.value)}></input>
                                    <input id="right-bet"  style={{height: "30px", textAlign: "center"}} type="number" placeholder={teamB} onChange={(e)=>setScoreB(e.target.value)}></input>
                                </div>
                                <br></br>
                                {
                                    betInProgress ? <span>Bet In Progress!</span> :
                                    <input id="bet-button" className="bet-button" type="submit" value={'Bet'} disabled={validateInput()}></input>
                                }
                            </form>
                            {
                                // serverScoreA !== undefined && serverScoreB !== undefined ? 
                                // `Your current bet: ${serverScoreA} - ${serverScoreB}` : undefined
                                getBetString()
                            }
                    </div>
                 </>
                }
                {adminCounter >= 7 && 
                    <form onSubmit={(e) => {e.preventDefault(); betRealScore()}} style={{marginTop: "20px"}}>
                        <div className="bet-line">
                            <input id="left-bet" style={{height: "30px", textAlign: "center"}} type="number" placeholder={teamA} onChange={(e)=>setRealScoreA(e.target.value)}></input>
                            <input id="right-bet" style={{height: "30px", textAlign: "center"}} type="number" placeholder={teamB} onChange={(e)=>setRealScoreB(e.target.value)}></input>
                        </div>
                        <br></br>
                        <input id="bet-button" className="bet-button" type="submit" value={'Bet'}></input>
                    </form>
                }
                <div id={`response-placeholder-${id}`} style={{"paddingTop": "10px", "display":"none"}}></div>
        </div>
    )
}
