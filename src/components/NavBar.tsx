import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  active: 'Home' | 'SOS' | 'Comunidade' | 'Perfil';
};

const NavBar: React.FC<Props> = ({ active }) => {
  const navigation = useNavigation();
  const icons = {
    Home: require('../assets/home-icon.png'),
    SOS: require('../assets/SOS-icon.png'),
    Comunidade: require('../assets/comunidade.png'),
    Perfil: require('../assets/perfil.png'),
  };

  const handleNavigation = (key: string) => {
    navigation.navigate(key as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        {Object.entries(icons).map(([key, image]) => (
          <TouchableOpacity key={key} style={styles.navItem} onPress={() => handleNavigation(key)}>
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
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    zIndex: 999, // garante que fique acima do conteúdo
  },
  navbar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
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
