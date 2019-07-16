import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "../../scripts/turn.js";

let globale;
class Turn extends React.Component {
  static defaultProps = {
    style: {},
    className: "",
    options: {}
  };

  componentDidMount() {
    if (this.el) {
      $(this.el).turn(Object.assign({}, this.props.options));
      globale = this.el;
    }
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    if (this.el) {
      $(this.el)
        .turn("destroy")
        .remove();
    }
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyDown = event => {
    if (event.keyCode === 37) {
      $(this.el).turn("previous");
    }
    if (event.keyCode === 39) {
      $(this.el).turn("next");
    }
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={Object.assign({}, this.props.style)}
        ref={el => (this.el = el)} >
        {this.props.children}
      </div>
    );
  }
}

const options = {
  width: 1100,
  height: 800,
  autoCenter: false,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

class FullMenu extends React.Component {
  menuNextPage(){
    $(globale).turn("next");
  }
  menuPrewPage(){
    $(globale).turn("previous");
  }
  render() {
    return <div className={(this.props.open)?"fullmenu show":"fullmenu"} id="FullMenu">
      <div className={(this.props.open)?"menuBook show":"menuBook"}>
      <div className="nextPrewBtnfromMenu nextMenuBtn" onClick={this.menuNextPage.bind(this)}></div>
      <div className="nextPrewBtnfromMenu prewMenuBtn" onClick={this.menuPrewPage.bind(this)}></div>
      <Turn options={options} className="magazine">
        {this.props.menuimages.map((page, index) => (
          <div key={index} className="page">
            <img src={page} alt="" />
          </div>
        ))}
      </Turn>
      </div>
    </div>
  }
}

export default FullMenu;
