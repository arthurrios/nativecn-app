import { User } from '@/components/User'
import { Image, View } from 'react-native'

export function Profile() {
  return (
    <View className="flex-1 bg-gray-700">
      <Image
        source={require('@/assets/banner.png')}
        alt="Banner"
        className="w-full h-52  -mb-16"
      />

      <User />
    </View>
  )
}
