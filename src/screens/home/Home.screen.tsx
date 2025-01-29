import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './Home.styles';
import { useHomeScreen } from './Home.hook';
import Animated from 'react-native-reanimated';
import CustomButton from '../../components/button/CustomButton';

const HomeScreen: FC = () => {
    const { animatedStyle, toggleAnimation } = useHomeScreen();

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animatedBox, animatedStyle]} />
            <CustomButton
                onPress={toggleAnimation}
                buttonText='Start Animation'
            />


        </View>
    );
};

export default HomeScreen;
