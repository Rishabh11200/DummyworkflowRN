import { TextStyle, StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import Fonts from '../../utils/Fonts';

const baseStyle: TextStyle = {
  color: Colors.PRIMARY_GREEN,
  textAlign: 'left',
};

const styles: { [key: string]: TextStyle } = {};

for (let size = 1; size <= 35; size++) {
  styles[`bold${size}`] = {
    ...baseStyle,
    fontSize: size,
    fontFamily: Fonts.Bold,
  };
  styles[`italic${size}`] = {
    ...baseStyle,
    fontSize: size,
    fontFamily: Fonts.Italic,
  };
  styles[`light${size}`] = {
    ...baseStyle,
    fontSize: size,
    fontFamily: Fonts.Light,
  };
  styles[`medium${size}`] = {
    ...baseStyle,
    fontSize: size,
    fontFamily: Fonts.Medium,
  };
  styles[`regular${size}`] = {
    ...baseStyle,
    fontSize: size,
    fontFamily: Fonts.Regular,
  };
  styles[`semiBold${size}`] = {
    ...baseStyle,
    fontSize: size,
    fontFamily: Fonts.SemiBold,
  };
  styles[`thin${size}`] = {
    ...baseStyle,
    fontSize: size,
    fontFamily: Fonts.Thin,
  };
}

export const textStyles = StyleSheet.create(styles);
