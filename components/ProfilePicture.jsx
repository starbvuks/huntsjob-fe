import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
  Modal,
  Text,
  Pressable,
  StyleSheet,
  ActionSheetIOS,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

import Icon from "react-native-vector-icons/MaterialIcons";

const ProfilePicture = () => {
  const [imageSource, setImageSource] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  const selectImage = async () => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Cancel", "Take Photo", "Choose from Gallery"],
          cancelButtonIndex: 0,
        },
        async (buttonIndex) => {
          if (buttonIndex === 1) {
            // Take photo
            await takePhoto();
          } else if (buttonIndex === 2) {
            // Choose from gallery
            await chooseFromGallery();
          }
        }
      );
    } else {
      // Android
      const result = await new Promise((resolve) => {
        Alert.alert(
          "Select Image",
          "Choose an option:",
          [
            {
              text: "Cancel",
              onPress: () => resolve("cancel"),
              style: "cancel",
            },
            { text: "Take Photo", onPress: () => resolve("takePhoto") },
            {
              text: "Choose from Gallery",
              onPress: () => resolve("chooseFromGallery"),
            },
          ],
          { cancelable: false }
        );
      });

      if (result === "takePhoto") {
        await takePhoto();
      } else if (result === "chooseFromGallery") {
        await chooseFromGallery();
      }
    }
  };

  const takePhoto = async () => {
    const { granted } = await Camera.requestPermissionsAsync();
    if (!granted) {
      alert("Permission to access camera is required!");
      return;
    }
    setModalVisible(true);
  };

  const chooseFromGallery = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImageSource({ uri: result.uri });
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={selectImage}>
        {imageSource ? (
          <Image source={imageSource} style={styles.imageBox} />
        ) : (
          <Image
            source={require("../assets/default-pfp.png")}
            style={styles.previewBox}
          />
        )}
      </TouchableOpacity>

      {Platform.OS === "android" ? (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Pressable
            style={styles.backdrop}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Camera
                ref={(ref) => setCameraRef(ref)}
                style={styles.cameraPreview}
                type={type}
              />
              <View style={styles.pictureButtons}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Icon
                    name="flip-camera-ios"
                    size={30}
                    style={{ color: "#FFFFFF" }}
                  />
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={async () => {
                    const result = await cameraRef.takePictureAsync({
                      quality: 1,
                    });
                    if (!result.cancelled) {
                      setImageSource({ uri: result.uri });
                    }
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.textStyle}>Take Photo</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  previewBox: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#2E475D",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: -50,
    zIndex: 10,
    alignSelf: "center",
  },
  imageBox: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#2E475D",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: -50,
    zIndex: 10,
    alignSelf: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  pictureButtons: {
    flexDirection: "row",
    gap: 70,
    width: "90%",
  },
  cameraPreview: {
    width: 300,
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 15,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    justifyContent: "center",
    backgroundColor: "#2E475D",
  },
  buttonClose: {
    marginVertical: 10,
  },
  textStyle: {
    color: "white",
    fontFamily: "NunitoSans_800ExtraBold",
  },
  backdrop: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default ProfilePicture;
