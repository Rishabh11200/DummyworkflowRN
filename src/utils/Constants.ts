export const REGEX = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  password: {
    length: 8,
    upperCase: /[A-Z]/,
    lowerCase: /[a-z]/,
    number: /\d/,
    specialChar: /[!@#$%^&*(),.?":{}|<>]/,
  },
  otp: {
    length: 6
  }
};

export const LocalStorageConstant = {
  IS_BIOMETRIC: 'isBiometric',
  IS_LOGIN: 'isLoggedIn',
  APP_LANGUAGE:'appLanguage'

}
