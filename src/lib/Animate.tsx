// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TimelineMax, TweenMax } from 'gsap';

type PropsType = {
  from: any;
  to: any;
  animate: string;
  duration: number;
  className?: string;
  style?: React.CSSProperties;
};

export default class Animate extends React.Component<PropsType> {
  tweenInstance: TweenMax | null = null;
  tl: TimelineMax | null = null;
  elemHost!: HTMLElement;

  constructor(props: PropsType) {
    super(props);

    this.tl = new TimelineMax({ pause: true });
    this.handleHostRef = this.handleHostRef.bind(this);
  }

  componentDidMount() {
    if (!this.elemHost) {
      return;
    }
    const { animate, duration, from, to } = this.props;

    if (animate === 'from') {
      this.tweenInstance = TweenMax.to(this.elemHost, duration, from);
    }

    if (animate === 'to') {
      this.tweenInstance = TweenMax.to(this.elemHost, duration, to);
    }
  }

  componentDidUpdate() {
    if (!this.elemHost) {
      return;
    }
    const { animate, duration, from, to } = this.props;

    if (animate === 'from') {
      TweenMax.to(this.elemHost, duration, from);
      // tl.pause();
      // this.tl && this.tl.add(tl);
      // this.tl && this.tl.reverse();
    } else if (animate === 'to') {
      this.tweenInstance = TweenMax.to(this.elemHost, duration, to);
    } else {
      this.tweenInstance = TweenMax.to(this.elemHost, duration, to);
    }
  }

  handleHostRef(node: HTMLElement | null) {
    if (node) {
      this.elemHost = node;
    }
  }

  render() {
    const { duration, animate, from, to, ...other } = this.props;
    return <div {...other} ref={this.handleHostRef} />;
  }
}
