import { StyleSheet, Image, SafeAreaView } from 'react-native';
import { Bell } from 'lucide-react-native';

import { Text, View } from '@/components/Themed';

export default function Search() {
  return (
    <View className='flex-1'>
      <SafeAreaView className='h-20 flex-row justify-between m-6'>
        <View className="flex-row gap-4 items-center justify-center">
          <Image
            className="h-11 w-11 rounded-full"
            source={{
              uri: 'https://github.com/luccasmelow.png',
            }}
          />
          <Text className="font-medium text-lg text-center">
            Hi, Jack
          </Text>
        </View>

        <Bell color='black' size={22}/>

      </SafeAreaView>
      
      <View className=' m-6'>
        <Text className="font-medium text-3xl text-left">
          Where are you going?
        </Text>

      </View>
     
    </View>
  );
}

