import { StyleSheet, Text, View } from 'react-native';

const Name = () => {
  return(
    <View style={styles.textContainer}>
      <Text style={styles.name}>Макс Ферстаппен</Text>
      <Text style={styles.title}>Formula 1 racing driver for the Red Bull team</Text>
      <Text style={styles.bio}>
       Люблю формулу-1, не люблю Бреда Питта. Учавствую в автогонках уже 5 лет.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
    color: "#710808ff",
  },
  title: {
    fontSize: 16,
    color: "#6b6b6bff",
    marginBottom: 8,
    textAlign: "center",
  },
  bio: {
    fontSize: 14,
    color: "#6b6b6bff",
    textAlign: "center",
  },
});

export default Name;