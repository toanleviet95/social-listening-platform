import React, {Component} from "react";
import {Modal} from "antd";
import Slider from "react-slick";

import GreedImage from "./GridImage";

class MediaList extends Component {

  state = {
    previewVisible: false,
  }

  handleToggle() {
    this.setState((previousState) => ({
      previewVisible: !previousState.previewVisible,
    }));
  }

  render() {
    return (
      <>
        <GreedImage mediaList={this.props.mediaList} handleToggle={this.handleToggle.bind(this)}/>
        <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleToggle.bind(this)}>
          <Carousel mediaList={this.props.mediaList}/>
        </Modal>
      </>
    );
  }
}

function Carousel(props) {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides'
  };
  return (
    <>
      <h4>Slide Show</h4>
      <Slider {...settings}>
        {props.mediaList.map((media, index) =>
          <div key={index}>
            <img alt="example" style={{width: '100%'}} src={media.image}/>
          </div>
        )
        }
      </Slider>
    </>
  );
}

export default MediaList;
