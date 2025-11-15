import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = () => {
  return (
    <View>
      <Pressable style={styles.btnBox}>
        <Text style={styles.btnText}>Подписаться</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnBox: {
    marginTop: 15,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#d50000ff",
  },
  btnText: {
    fontWeight: 500,
    color: "#ffffffff",
  },
});

export default Button;
