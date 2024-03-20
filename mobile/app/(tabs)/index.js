import { FlatList, Text, View } from "react-native";
import { chats } from "../../utils/dummydata/chats";

const Chat = ({chat}) => (
    <View className='p-2 flex-row gap-3 items-center justify-center'>
        <View className='h-14 w-14 bg-gray-500 rounded-full' />

        <View className='borde flex-1'>
            <View className='flex-row justify-between items-center'>
                <Text className='text-xl text-white font-semibold'>{ chat.receiver }</Text>
                <Text className=' text-[#00A884] font-semibold'>{ chat.time }</Text>
            </View>
            <Text className='text-gray-200'>{ chat.message }</Text>
        </View>
    </View>
)

export default function Tab(){
    return (
        <View className='flex-1 bg-[#111B21]'>
            <FlatList
                className='flex-1 mt-3 border '
                data={chats}
                renderItem={({ item }) => <Chat chat={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}