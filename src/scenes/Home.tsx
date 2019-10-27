import React, { useEffect, Suspense, useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import { Posts } from "../types/post";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import PostComponenet from "../components/Post";
const Home = ({
  post,
  isLoading,
  getPost,
  getUsers,
  getComments
}: {
  post: Posts;
  isLoading: boolean;
  getPost: () => void;
  getUsers: () => void;
  getComments: () => void;
}) => {
  useEffect(() => {
    getPost();
    getUsers();
    getComments();
  }, []);
  let [editorState, onEditorStateChange] = useState(EditorState.createEmpty());
  let _onEditorStateChange = (editorState: EditorState) => {
    onEditorStateChange(editorState);
  };
  console.log("postt", post);
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
        <Editor
          editorStyle={{ borderColor: "blue" }}
          wrapperStyle={{
            borderWidth: 1,
            borderColor: "#d3d3d3"
          }}
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={_onEditorStateChange}
        />
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
const getUsers = () => ({
  type: "USER_REQUESTED"
});
const getComments = () => ({
  type: "COMMENT_REQUESTED"
});
const mapDispatchToProps = {
  getPost: getPost,
  getUsers: getUsers,
  getComments: getComments
};

let HomeWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeWrapper;
