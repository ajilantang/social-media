import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import htmlToDraft from "html-to-draftjs";

import User from "./User";
import Comment from "./Comment";
import { Post } from "../types/post";
const PostComponenet = (props: Post) => {
  let { title, body, userId, id } = props;
  let [comment, onComment] = useState("");
  return (
    <View style={styles.container}>
      <User id={userId} />
      <Text style={{ fontWeight: "900", marginBottom: 5 }}>{title}</Text>
      <Text>{body}</Text>
      <Comment id={id} />
      <TextInput
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          padding: 10
        }}
        value={comment}
        onChange={({ nativeEvent: { text } }) => {
          // If you want to do something during changetext
          onComment(text);
        }}
        placeholder="Comment here"
        numberOfLines={10}
        onKeyPress={({ nativeEvent: { key: keyValue } }) => {
          if (keyValue === "Enter") {
            // Todo sent to api
            onComment("");
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    padding: 10,
    marginVertical: 5
  }
});
export default PostComponenet;
