import React from 'react';
import { Text, TextProps } from 'react-native';
import { textStyles } from './CustomTextStyles';
import { useLanguage } from '../../contexts/LanguageContext';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  fontStyle?: keyof typeof textStyles;
  color?: string;
  style?: any;
}

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  fontStyle,
  color,
  style,
  ...rest
}) => {
  const { isRTL } = useLanguage();
  // Warn if the styleName doesn't exist in the textStyles
  if (!textStyles[fontStyle]) {
    console.warn(`Style "${fontStyle}" not found in textStyles. Using default style.`);
  }

  // Determine the custom style based on the provided styleName and color
  const customStyle = {
    ...textStyles[fontStyle],
    color: color || (textStyles[fontStyle]?.color || 'black'),
  };

  // Return the Text component with extended props
  return (
    <Text style={[customStyle, { textAlign: isRTL ? 'right' : 'left' }, style,]} {...rest}>
      {children}
    </Text>
  );
};