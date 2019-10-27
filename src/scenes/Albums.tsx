import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { Albums as AlbumsProps } from "../types/albums";
import AlbumItem from "../components/Albums";
import Hoverable from "../components/Hoverable";

const Albums = ({
  albums,
  isLoading,
  getAlbums,
  getPhotos
}: {
  albums: AlbumsProps;
  isLoading: boolean;
  getAlbums: () => void;
  getPhotos: () => void;
}) => {
  useEffect(() => {
    getPhotos();
    getAlbums();
  }, []);
  return (
    <FlatList
      data={albums}
      renderItem={({ item }) => <AlbumItem {...item} />}
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
const getPhotos = () => ({
  type: "PHOTO_REQUESTED"
});

const mapDispatchToProps = {
  getAlbums: getAlbums,
  getPhotos: getPhotos
};

let AlbumsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

export default AlbumsWrapper;
