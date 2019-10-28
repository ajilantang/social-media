import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Comments, Comment } from "../types/comment";

type Props = {
  id: number;
  comments?: Comments;
  removeComment: (id: number) => void;
};

const RenderComment = (comment: Comment & { onDelete: () => void }) => {
  return (
    <View
      style={{
        marginVertical: 5,
        justifyContent: "space-around"
      }}
    >
      <TouchableOpacity
        style={{ position: "absolute", top: 10, right: 10, width: 20 }}
        onPress={() => {
          comment.onDelete();
        }}
      >
        <Text style={{ fontWeight: "bold", color: "red" }}>X</Text>
      </TouchableOpacity>
      <Text style={{ fontWeight: "900" }}>{comment.email}</Text>
      <Text
        style={{
          marginTop: 10
        }}
      >
        {comment.body}
      </Text>
    </View>
  );
};

const CommentComponent = ({ id: post_id, comments, removeComment }: Props) => {
  if ((comments && !comments.length) || !comments) {
    return <View style={{ marginVertical: 5 }} />;
  }
  let listComment = comments.filter(({ postId }) => post_id === postId);
  if (!listComment.length) {
    return <View style={{ marginVertical: 5 }} />;
  }
  return (
    <View
      style={{
        marginVertical: 5,
        justifyContent: "space-around",
        backgroundColor: "#d3d3d3",
        padding: 10
      }}
    >
      <FlatList
        data={listComment}
        renderItem={({ item }) => (
          <RenderComment {...item} onDelete={() => removeComment(item.id)} />
        )}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};
type State = { comments: { comments: Comments; loading: boolean } };

let mapStateToProps = (state: State) => {
  return { comments: state.comments.comments };
};

let removeComment = (id: number) => ({
  type: "REMOVE_COMMENT_REQUESTED",
  id: id
});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    removeComment: (id: number) => {
      return dispatch(removeComment(id));
    }
  };
};
let CommentWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentComponent);

export default CommentWrapper;
