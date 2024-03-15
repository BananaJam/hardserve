import "../css/style.css";

const SocialSign = () => {
    return ( 
        <div className="light-flourish-body-1" >
            <h2 className="title">To create a diet for you, we need your parameters</h2>
            <div className="form__container">
                        <label className="typelabel-b">What’s your gender? </label>
                        <div className="left-cont">

                            <div className="center-cont">
                                <input type="radio" id="maleradio" name="gender" />
                                <label className='label' for="maleradio" >Male</label>
                            </div>

                            <div className="center-cont">
                                <input type="radio" id="femaleradio" name="gender" />
                                <label className='label' for="femaleradio" >Female</label>
                            </div>

                            <div className="center-cont">
                                <input type="radio" id="nonradio" name="gender" />
                                <label className='label' for="nonradio" >Non-binary</label>
                            </div>

                        </div>
                    </div>

                    <div className="form__container">
                        <label className="typelabel-b">What’s your date of borth?</label>
                        <div className="typespan">
                            <div className="dropdown">
                                <span className="typelabel">Day</span>
                                <div>
                                <select className="text-box1"  name='day' id='day'>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
                                    <option value='11'>11</option>
                                    <option value='12'>12</option>
                                    <option value='13'>13</option>
                                    <option value='14'>14</option>
                                    <option value='15'>15</option>
                                    <option value='16'>16</option>
                                    <option value='17'>17</option>
                                    <option value='18'>18</option>
                                    <option value='19'>19</option>
                                    <option value='20'>20</option>
                                    <option value='21'>21</option>
                                    <option value='22'>22</option>
                                    <option value='23'>23</option>
                                    <option value='24'>24</option>
                                    <option value='25'>25</option>
                                    <option value='26'>26</option>
                                    <option value='27'>27</option>
                                    <option value='28'>28</option>
                                    <option value='29'>29</option>
                                    <option value='30'>30</option>
                                    <option value='31'>31</option>
                                </select>
                                </div>
                            </div>
                                        <div className="dropdown">
                                            <span className="typelabel">Month</span>
                                            <select className="text-box1 dropdown-toggle" id="monthselect" name='month'>
                                                <option value="January" selected="selected">January</option>
                                                <option value="February">February</option>
                                                <option value="March">March</option>
                                                <option value="April">April</option>
                                                <option value="May">May</option>
                                                <option value="June">June</option>
                                                <option value="July">July</option>
                                                <option value="August">August</option>
                                                <option value="September">September</option>
                                                <option value="October">October</option>
                                                <option value="November">November</option>
                                                <option value="December">December</option>
                                            </select>
                                        </div>
                                        <div className="dropdown">
                                            <span className="typelabel">Year</span>
                                            <input className="num-box text-box1" type='number' id="year" name='year' maxlength="4"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form__container">
                                    <label className="typelabel-b">Height</label>
                                    <div className="typespan">
                                        <div className="dropdown">
                                            <span className="typelabel-r">ft</span>
                                            <select className="text-box dropdown-toggle" id='height-feet' name='height-feet'>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5" selected="selected">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                            </select>
                                        </div>
                                        <div className="dropdown">
                                            <span className="typelabel-r">in</span>
                                            <select className="text-box dropdown-toggle" id='height-inches' name='height-inches'>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5" selected="selected">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                            </select>
                                        </div>
                                        <b className='or_h' >or &nbsp;&nbsp;</b>
                                        <div className="dropdown">
                                            <span className="typelabel-r">cm</span>
                                            <input className="text-box2 num-box" id="height-cm" type='number' name='height-cm' min="1" max='300' maxlength="3" placeholder='Enter your height'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form__container">
                                    <label className="typelabel-b">Weight</label>
                                    <div className="typespan">
                                        <div className='dropdown'>
                                            <input className="text-box2" type='number' id="weightnum" name='weight' min="1" max='2000' maxlength="4" placeholder='Enter your height'/>
                                        </div>
                                        <div className="dropdown">
                                            <select className="text-box1" id="weighttype" name='weight-unit'>
                                                <option value="Pounds">Pounds</option>
                                                <option value="Kilograms">Kilograms</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            <div className='form__container'>
                                <button className='submit_sign' type='submit'>
                                    Complete
                                </button>
                            </div>
        </div>
     );
}
 
export default SocialSign;