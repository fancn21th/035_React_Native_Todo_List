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
- Systrace
- [react-addons-perf](https://reactjs.org/docs/perf.html)

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

## 📖 Docs 文档

### Top 10 articles from google 
[Two official documents from Facebook already included above]
- [Dive into React Native performance](https://code.facebook.com/posts/895897210527114/dive-into-react-native-performance/)
- [A visual guide to React Native Performance](https://codeburst.io/a-visual-guide-to-react-native-performance-issues-and-resolving-insights-ccb0fc3fbcda)
- [React Native Performance: Major issues and insights on improving your app’s performance](https://www.simform.com/react-native-app-performance/)
- [6 TIPS YOU WANT TO KNOW ABOUT REACT NATIVE PERFORMANCE](https://www.simplytechnologies.net/blog/2017/6/6/6-tips-you-want-to-know-about-react-native-performance)
- [Performance Limitations of React Native and How to Overcome Them](https://medium.com/@talkol/performance-limitations-of-react-native-and-how-to-overcome-them-947630d7f440)
- [Solving Over 35 performance Issues in React Native](https://dev.to/purvak_pathak/react-native-performance-issues-and-insights-on-improving-it-b39)
- [I made React Native fast, you can too](https://launchdrawer.com/i-made-react-native-fast-you-can-too-9e61c951ce0)
- [Bridging in React Native](https://tadeuzagallo.com/blog/react-native-bridge/)

### Books
- [React and React Native](https://www.safaribooksonline.com/library/view/react-and-react/9781786465658/ch01s05.html)
- [React Native - Building Mobile Apps with JavaScript](https://www.safaribooksonline.com/library/view/react-native-/9781787282537/80343205-ed72-4bed-a2e6-1db14ebf29b1.xhtml)
- [Mastering React Native](https://www.safaribooksonline.com/library/view/mastering-react-native/9781785885785/ch11s02.html)
