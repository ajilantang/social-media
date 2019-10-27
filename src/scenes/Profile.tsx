import React from "react";
import { View } from "react-native";
type Props = { id?: string };
const Profile = (props: Props) => {
  console.log("propss", props.id);
  return <View></View>;
};

export default Profile;
