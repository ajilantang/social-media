import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import User from "./User";
import Comment from "./Comment";
import { Post } from "../types/post";

const PostComponenet = (
  props: Post & {
    addComment: (body: {
      postId: number;
      name: string;
      email: string;
      body: string;
    }) => void;
    removePost: (id: number) => void;
  }
) => {
  let { title, body, userId, id, addComment, removePost } = props;
  let [comment, onComment] = useState("");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 10, right: 10, width: 20 }}
        onPress={() => {
          removePost(id);
        }}
      >
        <Text style={{ fontWeight: "bold", color: "red" }}>X</Text>
      </TouchableOpacity>
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
            addComment({
              postId: id,
              name: "anonymous",
              email: "anonymous",
              body: comment
            });
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
const addComment = (body: {
  postId: number;
  name: string;
  email: string;
  body: string;
}) => ({
  type: "ADD_COMMENT_REQUESTED",
  body: body
});
const removePost = (id: number) => ({
  type: "REMOVED_POST_REQUESTED",
  id: id
});
const mapDispatchToProps = (dispatch: Function) => {
  return {
    removePost: (id: number) => {
      return dispatch(removePost(id));
    },
    addComment: (body: {
      postId: number;
      name: string;
      email: string;
      body: string;
    }) => {
      return dispatch(addComment(body));
    }
  };
};
let PostComponenetWrapper = connect(
  null,
  mapDispatchToProps
)(PostComponenet);
export default PostComponenetWrapper;
