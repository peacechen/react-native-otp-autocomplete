import { DeviceEventEmitter, NativeModules } from 'react-native';

const RNOtpAutocomplete = NativeModules.RNOtpAutocomplete;

interface OtpAutocomplete {
    getOtp: () => Promise<boolean>;
    getHash: () => Promise<string[]>;
    addListener: (handler: (value: string) => any) => import("react-native").EmitterSubscription;
    removeListener: () => void;
}

const OtpAutocomplete: OtpAutocomplete = {
    getOtp: RNOtpAutocomplete.getOtp,
    getHash: RNOtpAutocomplete.getHash,

    addListener: (handler) =>
        DeviceEventEmitter
            .addListener('com.jmlavoier.otpAutocomplete:otpReceived', handler),

    removeListener: () => DeviceEventEmitter.removeAllListeners('com.jmlavoier.otpAutocomplete:otpReceived'),
}

export default OtpAutocomplete;
