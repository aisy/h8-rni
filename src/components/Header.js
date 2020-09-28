import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends React.Component {
  // menambah constructor untuk bisa mengambil value props
  constructor (props) {
    super(props);

    this.state = {
      data: { nama: "Andhy", pekerjaan: "Front-end" }
    }
  }

  render() {
    // membuat variable title dari this.props
    const { title } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    padding: 20,
    marginBottom: 30
  },
  title: {
    color: "white",
    fontSize: 20
  }
})

export default Header