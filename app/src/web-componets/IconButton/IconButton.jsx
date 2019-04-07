class IconButton extends React.Component {
  constructor() {
    super();
    this.iconButtonRef = React.createRef();
  }

  componentDidMount() {
    this.iconButtonRef.current.addEventListener('click', () =>
      this.props.handleClick()
    );
  }

  render() {
    const props = this.props;

    return (
      <yeeyee-icon-button
        ref={this.iconButtonRef}
        floating={props.floating}
        type={props.type}
        color={props.color}
        name={props.name}
      />
    );
  }
}

export default IconButton;
