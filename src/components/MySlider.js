import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import banner from '../img/banner.jpg'


class MySlider extends Component {
    render() {
        return (
            <Carousel dynamicHeight={true} infiniteLoop={true}>
                <div>
                    <img className="img-responsive" src={banner} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className="img-responsive"   src="https://www.mingleweave.com/wp-content/uploads/2016/11/Be-a-good-crowd.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className="img-responsive"  src="https://www.mingleweave.com/wp-content/uploads/2016/11/Be-a-good-crowd.png" />
                </div>
            </Carousel>
        );
    }
}

export default MySlider;

