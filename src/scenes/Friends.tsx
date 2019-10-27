import React from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";

import { Users } from "../types/users";
const Friends = ({
  users,
  isLoading
}: {
  users?: Users;
  isLoading?: boolean;
}) => {
  if (isLoading || !users) {
    return <Text>Loading ....</Text>;
  }

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <View
          style={{
            marginVertical: 10,
            justifyContent: "space-around",
            backgroundColor: "#d3d3d3",
            padding: 10
          }}
        >
          <Text>{item.name}</Text>
          <Text
            style={{
              marginTop: 10
            }}
          >
            Company : {item.company.name}
          </Text>
          <Text
            style={{
              marginTop: 10
            }}
          >
            Email : {item.email}
          </Text>
        </View>
      )}
      keyExtractor={item => `${item.id}`}
    />
  );
};
type State = {
  users: { users: Users; loading: boolean };
};
const mapStateToProps = (state: State) => ({
  users: state.users.users,
  isLoading: state.users.loading
});

let FriendsWrapper = connect(
  mapStateToProps,
  null
)(Friends);

export default FriendsWrapper;
