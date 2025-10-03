import { View, Text} from 'react-native';
import SignOutButton from "@/components/clerk/SignOutButton";


export default function Index() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Home screen</Text>
            <SignOutButton/>
        </View>
    );
}

