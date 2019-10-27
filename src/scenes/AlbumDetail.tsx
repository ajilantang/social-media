import React, { useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";

import { connect } from "react-redux";

import { Photos, Photo } from "../types/photos";
type Props = {
  albumId?: number;
  photos: Photos;
  isLoading: boolean;
  getPhotosById: (id: number) => void;
};
const AlbumDetail = (props: Props) => {
  let { albumId, photos, isLoading, getPhotosById } = props;
  useEffect(() => {
    if (albumId) {
      getPhotosById(Number(albumId));
    }
  }, []);
  if (isLoading) {
    return <Text>Loading.....</Text>;
  }
  return (
    <View>
      <FlatList
        style={{ flexDirection: "row" }}
        data={photos}
        renderItem={({ item }) => (
          <View
            style={{
              marginVertical: 10
            }}
          >
            <Image
              style={{ width: 150, height: 150, marginRight: 10 }}
              source={{ uri: item.url }}
            />
            <Text style={{ width: 150 }}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};
type State = {
  photos: { photos: Photos; loading: boolean };
};
const mapStateToProps = (state: State) => ({
  photos: state.photos.photos,
  isLoading: state.photos.loading
});

const getPhotosById = (id: number) => ({
  type: "PHOTO_REQUESTED_BY_ID",
  albumId: id
});

const mapDispatchToProps = (dispatch: Function) => ({
  getPhotosById: (id: number) => dispatch(getPhotosById(id))
});

let AlbumDetailWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetail);

export default AlbumDetailWrapper;
