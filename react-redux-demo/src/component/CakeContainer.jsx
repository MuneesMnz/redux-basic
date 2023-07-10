import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes - {props.numofCakes}</h2>
      <button onClick={props.buycake} >Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numofCakes: state.numofCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buycake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
