import { resetPassword } from "aws-amplify/auth";

export const STRINGS = {
  batteryVersion: "batteryOS™ v1.3.4",

  // Info Screen 
  getStarted: "Get Started",
  infoText: "Battery energy you can see, use, buy, and sell.",

  //Alert Messages
  authenticationFailed: 'Authentication failed',
  biometricFailedLoginManually: 'Biometric authentication failed. Please login manually',
  error:"Error",
  errorWhileEnablingBiometrics:'An error occurred while enabling biometrics.',
  authenticateToContinue:'Authenticate to continue',
  OK:'OK',
  cancel:"Cancel",
  no:'No',
  yes:"Yes",
  // Validation messages
  emailMessages: {
    required: "Email is required",
    invalid: "Please enter a valid email address.",
  },
  passwordMessages: {
    required: "Password is required",
    minLength: "Password must be at least 6 characters long",
    upperCase: "Password must contain at least one uppercase letter",
    lowerCase: "Password must contain at least one lowercase letter",
    number: "Password must contain at least one number",
    specialChar: "Password must contain at least one special character",
  },
  confirmPasswordMessages: {
    required: 'Confirm password cannot be empty',
    mismatch: 'Passwords do not match',
  },
  otpMessages: {
    required: 'OTP cannot be empty',
    invalid: 'Please enter a valid 6-digit OTP.',
  },
  // Login Screen
  forgotPassword: "Forgot Password?",
  registerHere: "Register Here",
  enterEmail: "Enter your Email",
  enterPassword: "Enter your Password",
  login: 'Login',

  // Register Screen
  signUpError: 'Sign Up Error',
  enterOTP: 'Enter OTP',
  createAccount: 'Create Account',
  backToSignIn: 'Back to Sign In',
  registerText: 'Register',
  forgotPasswordText: 'Forgot Password?',
  email:
    'email',
  password: "password",
  otp: 'otp',
  confirmPass: "Confirm Password",

  // Forgot Password
  sendCode: "Send Code",
  resetPassword: "Reset Password",
  resendCode: "Resend Code",
  successfullyResetPass: 'Successfully reset password.',
   

  // Home Screen
  feskebakChargingStation: 'Feskeback charging station.',

  // Details Screen
  dropdown: {
    fiskeback: "Fiskeback",
    teslaEV: "Tesla EV",
    birkerod: "Birkerod",
    XPENG: "XPENG"
  },
  EV_JSS:"EV JSS 123",
  savings:"Savings",
  estimatedSavings:"Estimated savings 12 months",
  birkerodHomeStorage:"Birkerod Home Storage",
  selectOption:"Select option",
  XPENG_EV:"XPENG EV",
};
