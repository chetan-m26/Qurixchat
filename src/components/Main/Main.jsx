import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

// 5 & 6 are mic speech input consts
// line 103 to 124 from alt "mic" to 2 flower bracket(}})

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

/* 13 to 16 line are popping user icon

    const [isPopped, setIsPopped] = React.useState(false);
    const togglePop = () => {
        setIsPopped(prev => !prev);
    };
*/
// 22 and 23 line from alt under "user" to center pop flower bracket close '}'

    return (
        <div className='Main'>
            <div className='nav'>
                <p>Qurixchat</p>
                <img src={assets.user_icon} alt="user" onClick={togglePop}
                className={`user-icon ${isPopped ? 'center-pop' : ''}`} />
            </div>
            <div className="main-container">

                {!showResult
                 ?<>
                 <div className="greet">
                    <p><span>Hello!</span></p>
                    <p><span>May I Help You...</span></p>
                </div>

                <div className="card-box">
                    {[
                        "Suggest beautiful places to see on an upcoming road trip",
                        "What are some emerging trends in AI for 2025",
                        "Give me 5 tips to stay focused while working",
                        "Improve the readability of the following code"
                    ].map((text, index) => (
                    <div
                    className="card"
                    key={index}
                    onClick={() => {
                        setInput(text);
                        onSent(text);
                    }}
                    >
                        <p>{text}</p>
                        <img
                        src={
                            index === 0
                            ? assets.compass_icon
                            : index === 1
                            ? assets.bulb_icon
                            : index === 2
                            ? assets.message_icon
                            : assets.code_icon
                        }
                        alt=""
                        />
                        </div>
                    ))}
                    </div>

                 </>
                 :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ? 
                        <div class="loader">
                            <span class="l">L</span>
                            <span class="o">o</span>
                            <span class="a">a</span>
                            <span class="d">d</span>
                            <span class="i">i</span>
                            <span class="n">n</span>
                            <span class="g">g</span>
                            <span class="d1">.</span>
                            <span class="d2">.</span>
                            <span class="d2">.</span>
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>
                 </div>
                }

                
                <div className="Main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Ask Qchat' 
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && input.trim() !== '') {
                              onSent(input);
                            }
                          }}
                        />

                        <div>
                            <img src={assets.gallery_icon} alt="gallery" 
                            title="Gallery feature is not available yet"
                            style={{ cursor: 'not-allowed', opacity: 0.9 }} />
                            
                            <img src={assets.mic_icon} alt="mic" title="Click to speak"
                            style={{ cursor: recognition ? 'pointer' : 'not-allowed', opacity: recognition ? 1 : 0.5 }}
                            onClick={() => {
                                if (!recognition) {
                                    alert("Speech recognition is not supported in this browser.");
                                    return;
                                }
                                
                                recognition.lang = 'en-US';
                                recognition.start();
                                recognition.onstart = () => {
                                    console.log("Voice recognition started. Speak now.");
                                };
                                
                                recognition.onresult = (event) => {
                                    const voiceText = event.results[0][0].transcript;
                                    setInput(voiceText);
                                };
                                recognition.onerror = (event) => {
                                    console.error("Speech recognition error:", event.error);
                                };
                                }}
                                />

                            {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                    Qurixchat can make mistakes and may display inaccurate info, so double-check it.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main

