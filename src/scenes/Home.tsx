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
const Home = ({
  post,
  isLoading,
  getPost,
  getComments
}: {
  post: Posts;
  isLoading: boolean;
  getPost: () => void;
  getComments: () => void;
}) => {
  useEffect(() => {
    getPost();
    getComments();
  }, []);
  let [editorState, onEditorStateChange] = useState("");
  let [title, onEditTitle] = useState("");

  let _onEditorStateChange = (editorState: string) => {
    onEditorStateChange(editorState);
  };
  let handleChange = () => {
    // this.setState({ value: event.target.value });
    console.log("taik");
  };
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
            onEditorStateChange(e.currentTarget.value);
          }}
          value={editorState}
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            padding: 10,
            borderColor: "#d3d3d3",
            height: 100
          }}
          placeholder="Write post here ..."
        />
        <View style={{ alignItems: "flex-end", marginTop: 10 }}>
          <Button title="Submit" onPress={() => {}} />
        </View>
      </View>
      <FlatList
        data={post}
        renderItem={({ item }) => <PostComponenet {...item} />}
        keyExtractor={item => `${item.id}`}
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
const mapDispatchToProps = {
  getPost: getPost,
  getComments: getComments
};

let HomeWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeWrapper;
