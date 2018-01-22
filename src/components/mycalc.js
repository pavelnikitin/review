import React, {Component} from 'react';

class MyCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numRev: '',
            numVideo: '',
            servis1: 0,
            servis2: 0,
            servis3: 0,
            servis4: 0,
            servis5: 0
        }

        this.numRevChange = this
            .numRevChange
            .bind(this);

        this.numVideoChange = this
            .numVideoChange
            .bind(this);

    }

    numRevChange(event) {
        if (event.target.value >= 0) 

            this.setState({numRev: event.target.value})
        else 
            this.setState({numRev: ''})
    }

    numVideoChange(event) {
        if (event.target.value >= 0) 

            this.setState({numVideo: event.target.value})
        else 
            this.setState({numVideo: ''})
    }

    savecheckbox = (e) => {
        var state = this.state
        if (e.target.checked == true) 
            state[e.target.name] = e.target.value
        else 
            state[e.target.name] = 0
        this.setState(state);
        console.log(this.state)
    }

    render() {
        if (this.state.numRev !== '' && this.state.numRev > 0) {
            var numRev = this.state.numRev
        } else {
            var numRev = '0'
        }

        if (this.state.numVideo !== '' && this.state.numVideo > 0) {
            var numVideo = this.state.numVideo
        } else {
            var numVideo = '0'
        }

        var reviewsPrice = parseFloat(numRev) * 200 + parseFloat(numVideo) * 500;
        var servisesPrice = parseFloat(this.state.servis1) + parseFloat(this.state.servis2) + parseFloat(this.state.servis3) + parseFloat(this.state.servis4) + parseFloat(this.state.servis5)
        var totalPrice = reviewsPrice + servisesPrice;

        return (
            <form className="row calculator">
                <div className="col-xs-10 col-xs-push-1 ">
                    <div className="form-group myformgroup col-xs-12 col-sm-6 text-center">
                        <label>Количество отзывов</label>
                        <input
                            type="number"
                            value={this.state.numRev}
                            className="form-control myinput center-block"
                            id="reviews"
                            onChange={this.numRevChange}/>
                    </div>
                    <div className="form-group col-xs-12 col-sm-6 text-center">
                        <label>Количество видеоотзывов</label>
                        <input
                            type="number"
                            value={this.state.numVideo}
                            className="form-control myinput center-block"
                            id="videoreviews"
                            onChange={this.numVideoChange}/>
                    </div>
                    <div className="form-group col-xs-12 ">
                        <div className="checkboxgroup center-block">
                            <div className="checkbox block-center">
                                <label><input
                                    type="checkbox"
                                    value="1100"
                                    name="servis1"
                                    onChange={this.savecheckbox}/>Экспресс анализ оптимизации</label>
                            </div>
                            <div className="checkbox mycheckbox">
                                <label><input
                                    type="checkbox"
                                    value="1200"
                                    name="servis2"
                                    onChange={this.savecheckbox}/>Экспресс анализ контекстной рекламы</label>
                            </div>
                            <div className="checkbox mycheckbox ">
                                <label><input
                                    type="checkbox"
                                    value="1500"
                                    name="servis3"
                                    onChange={this.savecheckbox}/>Первичный анализ юзабилити</label>
                            </div>
                            <div className="checkbox mycheckbox ">
                                <label><input
                                    type="checkbox"
                                    value="1400"
                                    name="servis4"
                                    onChange={this.savecheckbox}/>Экспресс анализ конкурентов</label>
                            </div>
                            <div className="checkbox mycheckbox ">
                                <label><input
                                    type="checkbox"
                                    value="1600"
                                    name="servis5"
                                    onChange={this.savecheckbox}/>Передача веса сайта донора</label>
                            </div>
                        </div>
                        <div className="totalprice">{totalPrice}
                        </div>
                        рублей</div>
                </div>
            </form>

        );
    }
}

export default MyCalc;