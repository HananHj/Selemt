import { ScrollView, View } from "react-native";
import Header from "./Header";
import PlusButton from "./PlusButton";

const Layout = ({ navigation, children, showPlus }) => {
    return ( 
        <View className="flex-1">
            <Header navigation={navigation}/>
            <ScrollView className="p-4 gap-8"
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{ flexGrow: 1 }}>
                { children }
            </ScrollView>
            {showPlus && <PlusButton navigation={navigation}/>}
        </View>
    );
}
 
export default Layout;