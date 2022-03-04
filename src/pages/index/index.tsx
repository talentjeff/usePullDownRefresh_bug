import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount() { }

  // componentDidMount () { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text onClick={() => {
          Taro.navigateTo({
            url: 'pages/a'
          })
        }}>点我</Text>
      </View>
    )
  }
}
