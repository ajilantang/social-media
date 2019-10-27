import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { User, Users } from "../types/users";

type Props = { id: number; users?: Users };
const UserComponent = ({ id: user_id, users }: Props) => {
  if ((users && !users.length) || !users) {
    return <Text>Users not found</Text>;
  }
  let user = users.filter(({ id }) => user_id === id)[0];
  if (!user) {
    return <Text>Users not found</Text>;
  }
  return (
    <View
      style={{
        marginVertical: 10,
        justifyContent: "space-around"
      }}
    >
      <Text>{user.name}</Text>
      <Text
        style={{
          marginTop: 10
        }}
      >
        Company : {user.company.name}
      </Text>
      <Text
        style={{
          marginTop: 10
        }}
      >
        Email : {user.email}
      </Text>
    </View>
  );
};
type State = { users: { users: Users; loading: boolean } };
let mapStateToProps = (state: State) => {
  return { users: state.users.users, comment: [] };
};
let userContainer = connect(
  mapStateToProps,
  null
)(UserComponent);
export default userContainer;
