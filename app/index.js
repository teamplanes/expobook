import React from 'react';
import ReactNative from 'react-native';
// import { StackNavigator } from 'react-navigation';

const App = props =>
// const Navigator = StackNavigator({
//   Home: {
//     screen: screenProps => (
//       <View>
//         {Object.keys(props.components).map(componentName => (
//           <TouchableOpacity
//             onPress={() =>
//               screenProps.navigation.navigate(`Component:${componentName}`)
//             }
//           >
//             <Text
//               key={componentName}
//               style={{ fontWeight: '900', fontSize: 30 }}
//             >
//               {componentName}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     ),
//   },
//   ...Object.keys(props.components).reduce(
//     (cur, next) => ({
//       ...cur,
//       [`Component:${next}`]: {
//         screen: props.components[next],
//       },
//     }),
//     {},
//   ),
// });
  <ReactNative.Text>HELLO WORLD</ReactNative.Text>
  // return <Navigator />;
;
export default components => () => <App components={components} />;
