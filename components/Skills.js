import { StyleSheet, Text, View } from 'react-native';

const Skills = () => {

  const skill = ['Гонки', 'Машины', 'Формула-1']

  return(
    <View style={styles.skills}>
      {skill.map((skill, index) =>
        <Text key={index} style={styles.skill}>
          {skill}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  skills: {
    gap: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },
  skill: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#710808ff",
    color: "#ffffffff",
  },
});

export default Skills;