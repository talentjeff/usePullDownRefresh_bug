import { usePullDownRefresh } from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import './index.less'

const A = () => {
  usePullDownRefresh(() => {
    alert('触发usePullDownRefresh');
  });

  return (
    <View className='wrap'>
      <Text>usePullDownRefresh出问题的页面</Text>
      <Text>从其他页面跳转过来会出问题</Text>
      <Text>刷新页面后，又好了</Text>
    </View>
  )
}

export default A;
