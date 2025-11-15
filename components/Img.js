import { Image, StyleSheet } from 'react-native';

const Img = () => {
  return(
    <Image
      style={styles.avatar}
      source={{
        uri: "https://i.postimg.cc/C14Xqjz3/93aa9b074b561039023b395e51eaa198.jpg",
      }}
    />
  );
};

const styles = StyleSheet.create({
   avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 16,
  },
});

export default Img;