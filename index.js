import React, {Component, PropTypes} from 'react';
import scrollTop from 'dom-helpers/query/scrollTop';
import height from 'dom-helpers/query/height';

export default class Infinite extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    offset: PropTypes.number,
    disabled: PropTypes.bool,
    container: PropTypes.bool,
    reverse: PropTypes.bool
  };

  static defaultProps = {
    offset: 200,
    disabled: false,
    container: false,
    reverse: false
  };

  // Last scroll, to check if we scrolled up or down
  last = 0;

  // The scrolling container, where we run the scroll listener.
  // The actual container doesn't trigger the scrolling event.
  get scroller() {
    return this.props.container
      ? this.refs.container
      : window;
  }

  // The actual container, where we perform the actual calculations with.
  get container() {
    return this.props.container
      ? this.refs.container
      : document.querySelector('html, body');
  }

  componentDidMount() {
    this.scroller.addEventListener('scroll', this.handle);
  }

  componentWillUnmount() {
    this.scroller.removeEventListener('scroll', this.handle);
  }

  render() {
    const {children, offset, disabled, container, callback, reverse, ...props} = this.props;
    return <div ref="container" {...props}>{children}</div>;
  }

  handle = () => {
    const {container, scroller, props} = this;
    const {disabled, offset, reverse, callback} = props;

    if ( this.props.disabled ) {
      return;
    }

    const totalScroll = scrollTop(scroller);

    // If we're supposed to scroll downwards, and we're doing so.
    if ( !reverse && this.last < totalScroll ) {
      const containerBottom = container.scrollHeight;
      const scrollerHeight = height(scroller);

      if ( totalScroll + offset >= containerBottom - scrollerHeight ) {
        callback();
      }
    // If we're supposed to scroll up, and we're doing so
    // wnd we've scrolled up to our "threshold"
    } else if ( reverse && this.last > totalScroll && totalScroll - offset <= 0 ) {
      callback();
    }

    this.last = totalScroll;
  }
}
