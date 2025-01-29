
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export const useHomeScreen = () => {
    const width = Dimensions.get('window').width;
    const [isVisible, setIsVisible] = useState(false);
    const translateX = useSharedValue(-300); 

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
            
        };
    });

    const toggleAnimation = () => {
        if (isVisible) {

            translateX.value = withTiming(-300, { duration: 500 });
        } else {

            translateX.value = withTiming(width/2.7, { duration: 500 });
        }
        setIsVisible(!isVisible);
    };


    return {  animatedStyle ,toggleAnimation
    };
};
