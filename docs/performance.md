#  Performance matters
#### React Native 性能优化

## 性能优化的原因

- [What you need to know about frames](https://facebook.github.io/react-native/docs/performance.html#what-you-need-to-know-about-frames)

## 常见性能问题

- [Common sources of performance problems](https://facebook.github.io/react-native/docs/performance.html#common-sources-of-performance-problems)

## 优化解决方案

- [Unbundling + inline requires](https://facebook.github.io/react-native/docs/performance.html#unbundling-inline-requires)

## 性能优化工具

- [Profiling](https://facebook.github.io/react-native/docs/performance.html#profiling)

## 性能优化技巧

- [Use PureComponent or shouldComponentUpdate](https://codeburst.io/6-simple-ways-to-speed-up-your-react-native-app-d5b775ab3f16)
~~~javascript
// Following two code samples do the same thing.

class MyComponent extends React.PureComponent {
  //
}
class MyComponent extends React.Component {
  //
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.firstProp === nextProps. firstProp &&
       this.props.secondProp === nextProps.secondProp) {
      return false;
    }
    return true
  }
  //
}
~~~
- [Use key attribute on list items](https://codeburst.io/6-simple-ways-to-speed-up-your-react-native-app-d5b775ab3f16)
~~~javascript
class MyComponent extends React.PureComponent {
  render() {
    return this.props.data.map((item, i) => {
      return <Text key={item.id}>{item.title}</Text>
    });
  }
}
~~~
- [Bind early and don’t create functions inside render](https://codeburst.io/6-simple-ways-to-speed-up-your-react-native-app-d5b775ab3f16)
~~~javascript
// do this
class MyComponent extends React.PureComponent {
  
  constructor(props) {
    super(props);
    this.doWork = this.doWork.bind(this);
  }
  doWork() {
    // doing some work here.
    // this.props.dispatch....
  }
  
  render() {
    return <Text onPress={this.doWork}>Do Some Work</Text>
  }
  
}
~~~
~~~html
// do not do this
<Text onPress={ () => this.doWork() }>Do Some Work</Text>

// or this
<Text onPress={ this.doWork.bind(this) }>Do Some Work</Text>
~~~
- [Don’t update state or dispatch actions in componentWillUpdate](https://codeburst.io/6-simple-ways-to-speed-up-your-react-native-app-d5b775ab3f16)
- [Use Perf monitor to watch FPS](https://codeburst.io/6-simple-ways-to-speed-up-your-react-native-app-d5b775ab3f16)
