import React, { useEffect, Suspense, useState, ChangeEvent } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Button
} from "react-native";
import { connect } from "react-redux";
import { Posts } from "../types/post";

import PostComponenet from "../components/Post";
type HomeProps = {
  post: Posts;
  isLoading: boolean;
  getPost: () => void;
  getComments: () => void;
  addPost: (body: { title: string; body: string; userId: number }) => void;
};
const Home = ({
  post,
  isLoading,
  getPost,
  getComments,
  addPost
}: HomeProps) => {
  useEffect(() => {
    getPost();
    getComments();
  }, []);
  let [body, onBodyChange] = useState("");
  let [title, onEditTitle] = useState("");

  if (isLoading) {
    // todo : using loading component
    return <Text>Loading ....</Text>;
  }
  return (
    <View>
      <View
        style={{
          padding: 10
        }}
      >
        <TextInput
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            padding: 10,
            marginBottom: 10,
            borderColor: "#d3d3d3"
          }}
          value={title}
          placeholder="title"
          onChangeText={onEditTitle}
        />

        <textarea
          onChange={e => {
            onBodyChange(e.currentTarget.value);
          }}
          value={body}
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            padding: 10,
            borderColor: "#d3d3d3",
            height: 100
          }}
          placeholder="Write post here ..."
        />
        <View style={{ alignItems: "flex-end", marginTop: 10 }}>
          <Button
            title="Submit"
            onPress={() => {
              addPost({ title, body, userId: 1 });
              onBodyChange("");
              onEditTitle("");
            }}
          />
        </View>
      </View>
      <FlatList
        data={post}
        renderItem={({ item }) => <PostComponenet {...item} />}
        keyExtractor={item => {
          return `${item.id}`;
        }}
      />
    </View>
  );
};
type State = {
  post: { post: Posts; loading: boolean };
};
const mapStateToProps = (state: State) => ({
  post: state.post.post,
  isLoading: state.post.loading
});
const getPost = () => ({
  type: "POST_REQUESTED"
});
const getComments = () => ({
  type: "COMMENT_REQUESTED"
});

const addPost = (body: { title: string; body: string; userId: number }) => ({
  type: "ADD_POST_REQUESTED",
  body: body
});
const mapDispatchToProps = (dispatch: Function) => {
  return {
    getPost: () => dispatch(getPost()),
    getComments: () => dispatch(getComments()),
    addPost: (body: { title: string; body: string; userId: number }) =>
      dispatch(addPost(body))
  };
};

let HomeWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeWrapper;
