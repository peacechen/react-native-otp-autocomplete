import { DeviceEventEmitter, NativeModules, Platform } from 'react-native';

const RNOtpAutocomplete = NativeModules.RNOtpAutocomplete;

interface OtpAutocomplete {
    getOtp: () => Promise<boolean>;
    getHash: () => Promise<string[]>;
    addListener: (handler: (value: string) => any) => import("react-native").EmitterSubscription;
    removeListener: () => void;
}

const OtpAutocomplete: OtpAutocomplete = Platform.OS === 'android' ? {
    getOtp: RNOtpAutocomplete.getOtp,
    getHash: RNOtpAutocomplete.getHash,

    addListener: (handler) =>
        DeviceEventEmitter
            .addListener('com.jmlavoier.otpAutocomplete:otpReceived', handler),

    removeListener: () => DeviceEventEmitter.removeAllListeners('com.jmlavoier.otpAutocomplete:otpReceived'),
} : {
    // Mock to not break in IOS
    getOtp: new Promise((res) => res(null)),
    getHash: new Promise((res) => res(null)),
    addListener: () => {},
    removeListener: () => {},
}

export default OtpAutocomplete;
