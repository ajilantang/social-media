import { Component, ReactNode } from "react";

type MouseEventHandler = (mouse: MouseEvent) => void;

type EventHandlers = {
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
};

type Props = {
  render: (isHovered: boolean, eventHandlers: EventHandlers) => ReactNode;
  hoverStyle?: StyleSheet;
};

type State = {
  isHovered: boolean;
};

export default class Hoverable extends Component<Props, State> {
  state = {
    isHovered: false
  };

  eventHandlers = {
    onMouseEnter: (event: MouseEvent) => {
      this.setState({
        isHovered: true
      });
    },
    onMouseLeave: (event: MouseEvent) => {
      this.setState({
        isHovered: false
      });
    }
  };

  render() {
    return this.props.render(this.state.isHovered, this.eventHandlers);
  }
}
