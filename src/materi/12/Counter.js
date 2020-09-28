import React from "react";
import { View, Text, Button } from 'react-native';
import { connect } from "react-redux";

// define component
const Counter = (props) => {
  // function untuk menambah
  const increment = () => {
    // memanggil fungsi yang ada pada reducer
    props.dispatch({ type: "INCREMENT" });
  };

  // function untuk mengurangi
  const decrement = () => {
    // memanggil fungsi yang ada pada reducer
    props.dispatch({ type: "DECREMENT" });
  };

  return (
    <View>
      <Text>Counter</Text>
      <Text>
        {/* melakukan penambahan */}
        <Button title={"+"} onPress={increment} />
        {/* result yang diharapkan */}
        <Text>{props.count}</Text>
        {/* melakukan pengurangan */}
        <Button title={"-"} onPress={decrement} />
      </Text>
    </View>
  );
};

// action
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

//
export default connect(mapStateToProps)(Counter);
