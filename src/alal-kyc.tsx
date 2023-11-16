import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import WebView from "react-native-webview";

const AlalKyc = () => {
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <WebView
        // ref={ref}
        originWhitelist={["*"]}
        javaScriptEnabled={true}
        startInLoadingState={true}
        domStorageEnabled={true}
        onNavigationStateChange={(event) => {
          console.log("navigation state change: ", event);
        }}
        source={{
          uri: "https://sandbox.saalal.com/alal-kyc-test",
        }}
        onMessage={(event) => {
          console.log("something happen: ", event.nativeEvent.data);
        }}
      />
    </View>
  );
};

export default AlalKyc;
