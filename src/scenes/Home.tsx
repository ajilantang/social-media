import React, { useEffect, Suspense } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Posts } from "../types/post";

const Home = ({
  post,
  isLoading,
  getNews
}: {
  post: Posts;
  isLoading: boolean;
  getNews: () => void;
}) => {
  useEffect(() => {
    getNews();
  }, []);
  return (
    <View>
      <Text>ini Home</Text>
    </View>
  );
};
const mapStateToProps = (state: { post: Posts; loading: boolean }) => ({
  post: state.post,
  isLoading: state.loading
});
const getNews = () => ({
  type: "POST_REQUESTED"
});
const mapDispatchToProps = {
  getNews: getNews
};

let HomeWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeWrapper;
