import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PhotoAlbum from "@material-ui/icons/PhotoAlbum";

import { Album as AlbumProps } from "../types/albums";

export default function Album(props: AlbumProps) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
        padding: 10,
        borderColor: "lightgrey"
      }}
    >
      <PhotoAlbum />
      <Text style={{ alignItems: "center", marginLeft: 10 }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
