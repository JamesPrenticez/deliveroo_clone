import React, { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon
} from "react-native-heroicons/outline";

const HomeSceen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <SafeAreaView className="pt-8 bg-white">
      {/* Header */}
      <View className="pb-3 flex-row items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 rounded-full"
          source={{
            uri: "https://links.papareact.com/wru"
          }}
        />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <View className="flex-row">
              <Text className="font-bold ">Current Location</Text>
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </View>
          <UserIcon size={35} color="#00CCBB"/>
      </View>

        {/* Search */}
        <Text className="w-full bg-red-500">
          <View className="flex-row bg-gray-300">
            <MagnifyingGlassIcon size={20} color="black"/>
            
            <AdjustmentsHorizontalIcon size={20} color="black"/>
            
            <TextInput 
              placeholder="Resturants"
              keyboardType="default"
            />
          </View>
        </Text>
    </SafeAreaView>
  )
}

export default HomeSceen