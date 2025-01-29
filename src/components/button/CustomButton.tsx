import React from 'react';
import { Text, TouchableOpacity, ViewStyle, TextStyle, StyleSheet, View, ActivityIndicator } from 'react-native';
 
import Fonts from '../../utils/Fonts'; 
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface CustomButtonProps {
  buttonText?: string;
  onPress: () => void;
  buttonStyle?: any;
  textStyle?: TextStyle;
  rightIcon?: React.ReactNode; isLoading?: Boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText = 'Button',
  onPress,
  buttonStyle,
  textStyle,
  rightIcon, isLoading
}) => { 
  return (
    <TouchableOpacity
      onPress={isLoading ? ()=>{} : onPress}
      style={[
        styles.button,
        {
          justifyContent: isLoading || !rightIcon ? 'center' : 'space-between',
          flexDirection: 'row'
        },
        buttonStyle,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : (
        <>
          <Text
            numberOfLines={1}
            style={[
              styles.text,
              {
                textAlign: rightIcon ? 'right' : 'center',
                flex: rightIcon ? 0.9 : 0,
              },
              textStyle,
            ]}
          >
            {buttonText}
          </Text>
          {rightIcon && <View style={styles.iconWrapper}>{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors. WHITE,
    borderRadius: 45,
    width: '100%',
    height: 64,
  } as ViewStyle,

  text: {
    fontFamily: Fonts.SemiBold,
    textAlign: 'center',
    color: Colors.BLACK,
    fontSize: 16,
    ellipsizeMode: "tail"
  } as TextStyle,
  iconWrapper: {
    marginLeft: 8,
  } as ViewStyle,
});

export default CustomButton;