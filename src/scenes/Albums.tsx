import React, { useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { Albums as AlbumsProps } from "../types/albums";
import AlbumItem from "../components/Albums";
import Hoverable from "../components/Hoverable";

const Albums = ({
  albums,
  isLoading,
  getAlbums
}: {
  albums: AlbumsProps;
  isLoading: boolean;
  getAlbums: () => void;
}) => {
  useEffect(() => {
    getAlbums();
  }, []);
  if (isLoading) {
    return <Text>Loading.....</Text>;
  }
  return (
    <FlatList
      data={albums}
      renderItem={({ item }) => (
        <Hoverable
          render={(isHovered, eventHandlers) => (
            <View {...eventHandlers}>
              <AlbumItem
                album={item}
                style={isHovered && { backgroundColor: "#add8e6" }}
              />
            </View>
          )}
        />
      )}
      keyExtractor={item => `${item.id}`}
    />
  );
};
type State = {
  albums: { albums: AlbumsProps; loading: boolean };
};
const mapStateToProps = (state: State) => ({
  albums: state.albums.albums,
  isLoading: state.albums.loading
});
const getAlbums = () => ({
  type: "ALBUM_REQUESTED"
});
const mapDispatchToProps = (dispatch: Function) => ({
  getAlbums: () => dispatch(getAlbums())
});

let AlbumsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

export default AlbumsWrapper;
