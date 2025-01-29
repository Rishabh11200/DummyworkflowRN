// src/components/CustomImage.tsx

import React, { FC } from 'react';
import { Image, ImageProps, StyleSheet, View } from 'react-native';

interface CustomImageProps extends ImageProps {
  source: any;
  style?: object;
  isUri?: boolean;
}

const CustomImage: FC<CustomImageProps> = ({
  source,
  style,
  isUri = false,
  ...props
}) => {
  const imageSource = isUri ? { uri: source } : source;

  return (
    <View style={[styles.container, style]}>
      <Image source={imageSource} style={styles.image} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CustomImage;
