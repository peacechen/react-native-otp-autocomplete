"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var RNOtpAutocomplete = react_native_1.NativeModules.RNOtpAutocomplete;
var OtpAutocomplete = {
    getOtp: RNOtpAutocomplete.getOtp,
    getHash: RNOtpAutocomplete.getHash,
    addListener: function (handler) {
        return react_native_1.DeviceEventEmitter
            .addListener('com.jmlavoier.otpAutocomplete:otpReceived', handler);
    },
    removeListener: function () { return react_native_1.DeviceEventEmitter.removeAllListeners('com.jmlavoeir.otpAutocomplete:otpReceived'); },
};
exports.default = OtpAutocomplete;
