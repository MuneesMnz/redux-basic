import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item -{props.item}</h2>
      <button onClick={props.buyitem}>buy item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemStore = ownProps.cak
    ? state.cake.numofCakes
    : state.iceCream.numOfIceCream;
  return {
    item: itemStore,
  };
};

const mapDispatchToProps = (dispatch, ownprops) => {
  const itemDispatch = ownprops.cak
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

    return {
      buyitem:itemDispatch
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
