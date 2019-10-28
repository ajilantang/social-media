import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";

import { Comments, Comment } from "../types/comment";

type Props = { id: number; comments?: Comments };

const RenderComment = (comment: Comment) => {
  return (
    <View
      style={{
        marginVertical: 5,
        justifyContent: "space-around"
      }}
    >
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

const CommentComponent = ({ id: post_id, comments }: Props) => {
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
        renderItem={({ item }) => <RenderComment {...item} />}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};
type State = { comments: { comments: Comments; loading: boolean } };

let mapStateToProps = (state: State) => {
  return { comments: state.comments.comments };
};

let CommentWrapper = connect(
  mapStateToProps,
  null
)(CommentComponent);

export default CommentWrapper;
