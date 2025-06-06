import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

type Props = {
  active: 'Home' | 'SOS' | 'Comunidade' | 'Perfil';
};

const NavBar: React.FC<Props> = ({ active }) => {
  const icons = {
    Home: require('../assets/Home-icon.png'),
    SOS: require('../assets/SOS-icon.png'),
    Comunidade: require('../assets/SOS-icon.png'),
    Perfil: require('../assets/SOS-icon.png'),
  };

  return (
    <View style={styles.navbar}>
      {Object.entries(icons).map(([key, image]) => (
        <TouchableOpacity key={key} style={styles.navItem}>
          <Image
            source={image}
            style={[
              styles.icon,
              active === key ? styles.iconActive : {},
            ]}
          />
          <Text style={[styles.label, active === key ? styles.labelActive : {}]}>
            {key}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#999',
  },
  iconActive: {
    tintColor: '#E02323',
  },
  label: {
    fontSize: 10,
    color: '#999',
  },
  labelActive: {
    color: '#E02323',
    fontWeight: 'bold',
  },
});

export default NavBar;
