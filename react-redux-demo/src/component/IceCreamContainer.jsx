import React from "react";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";
import { connect } from "react-redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>number of icecreams-{props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>buy icecream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream:()=> dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
