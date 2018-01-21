import React, {Component} from 'react';

class MyCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numRev: '',
            numVideo: '',
            servises: '',
            totalPrice: ''
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
        var checkbox1 = this.refs.check1
        
        console.log(checkbox1)
        var totalPrice = reviewsPrice;

        return (
            <form>
                <div className="form-group">
                    <label>Количество отзывов</label>
                    <input
                        type="number"
                        value={this.state.numRev}
                        className="form-control inputone"
                        id="reviews"
                        placeholder="Введите количество отзывов"
                        onChange={this.numRevChange}/>
                </div>
                <div className="form-group">
                    <label>Количество видеоотзывов</label>
                    <input
                        type="number"
                        value={this.state.numVideo}
                        className="form-control inputone"
                        id="videoreviews"
                        placeholder="Введите количество видеоотзывов"
                        onChange={this.numVideoChange}/>
                    <div className="checkbox mycheckbox">
                        <label><input type="checkbox" value="1100" ref="check1" />Экспресс анализ оптимизации</label>
                    </div>
                    <div className="checkbox mycheckbox">
                        <label><input type="checkbox" value="1200" ref="check2"/>Экспресс анализ контекстной рекламы</label>
                    </div>
                    <div className="checkbox mycheckbox ">
                        <label><input type="checkbox" value="1500" ref="check3"/>Первичный анализ юзабилити</label>
                    </div>
                    <div className="checkbox mycheckbox ">
                        <label><input type="checkbox" value="1400" ref="check4"/>Экспресс анализ конкурентов</label>
                    </div>
                    <div className="checkbox mycheckbox ">
                        <label><input type="checkbox" value="1600" ref="check5"/>Передача веса сайта донора на свой сайт</label>
                    </div>
                </div>
                <div className="totalprice">{totalPrice}
                    рублей</div>
            </form>

        );
    }
}

export default MyCalc;