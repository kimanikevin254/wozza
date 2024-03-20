import { Tabs } from 'expo-router'
import { FontAwesome, Feather, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { Header, HeaderTitle, HeaderBackground } from '@react-navigation/elements'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'

function MyHeader({ options }){
    return (
        <Header
            { ...options }

            headerTitle={() => (
                <HeaderTitle
                    style={{ color:'white', fontWeight: 'bold', fontSize: 27, letterSpacing: 1, fontStyle: 'italic' }}
                >Wozza</HeaderTitle>
            )}

            headerRight={() => (
                <View
                    className='flex-row gap-3 items-center'
                >
                    <TouchableOpacity className='p-2' onPress={() => console.log('pressed')}>
                        <Feather name="camera" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity className='pl-4 pr-2 py-2' onPress={() => console.log('pressed')}>
                        <FontAwesome name="search" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity className='p-2' onPress={() => console.log('pressed')}>
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )}

            headerBackground={() => (
                <HeaderBackground 
                    style={{
                        backgroundColor: '#202C33'
                    }}
                />
            )}
        />
    )
}

export default function TabLayout(){
    return (
        <View style={{ flex: 1 }}>
            <StatusBar 
                backgroundColor='#202C33'
                barStyle='light-content' 
                animated={true}
            />
            <Tabs screenOptions={{ 
                tabBarActiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#202C33',
                    height: 60,
                    paddingBottom: 4
                },
                header: ({ options, route }) => (
                    <MyHeader { ...options } />
                )}}
                
            >
                <Tabs.Screen 
                    name="index" 
                    options={{
                        title: 'Chats',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name='android-messages' color={color} />
                    }}
                />
                <Tabs.Screen 
                    name="updates" 
                    options={{
                        title: 'Updates',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name='circle-o-notch' color={color} />
                    }}
                />
                <Tabs.Screen 
                    name="communities" 
                    options={{
                        title: 'Communities',
                        tabBarIcon: ({ color }) => <MaterialIcons size={28} name='groups' color={color} />
                    }}
                />
                <Tabs.Screen 
                    name="calls" 
                    options={{
                        title: 'Calls',
                        tabBarIcon: ({ color }) => <Ionicons size={28} name='call' color={color} />
                    }}
                />
            </Tabs>
        </View>
    )
}