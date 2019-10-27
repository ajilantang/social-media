import React, { useEffect } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  View,
  ViewStyle
} from "react-native";
import { connect } from "react-redux";
import PhotoAlbum from "@material-ui/icons/PhotoAlbum";

import { Album as AlbumProps } from "../types/albums";
import { Users } from "../types/users";

import { navigate } from "hookrouter";
type Props = {
  users?: Users;
  isLoading?: boolean;
  album: AlbumProps;
  style?: StyleProp<ViewStyle>;
};
function Album(props: Props) {
  let { album, style, users, isLoading } = props;
  if (!users || isLoading) {
    return <Text>Loading...</Text>;
  }
  let user = users.filter(({ id }) => id === album.userId);
  return (
    <TouchableOpacity
      onPress={() => navigate(`/album_photo/${album.id}`)}
      style={[
        {
          flexDirection: "row",
          borderWidth: StyleSheet.hairlineWidth,
          marginVertical: 10,
          padding: 10,
          borderColor: "lightgrey"
        },
        style
      ]}
    >
      <PhotoAlbum />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: "900" }}>{user[0].name}</Text>
        <Text>{album.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
type State = {
  users: { users: Users; loading: boolean };
};
const mapStateToProps = (state: State) => ({
  users: state.users.users,
  isLoading: state.users.loading
});

let AlbumsWrapper = connect(
  mapStateToProps,
  null
)(Album);

export default AlbumsWrapper;
