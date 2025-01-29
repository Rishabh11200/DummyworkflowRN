import { I18nManager, Platform, ViewStyle } from "react-native";

export const viewRTLStyle = (): ViewStyle => {
  if (Platform.OS === 'ios' && I18nManager.isRTL) {
    return {
      flexDirection: 'row-reverse',
    };
  }
  return {
    flexDirection: 'row',
  };
};
export const textRTLStyle = () => {
  if (Platform.OS === 'ios' && I18nManager.isRTL) {
    return {
      textAlign: 'right'
    };
  }
  return {
    textAlign: 'left'
  };
}
