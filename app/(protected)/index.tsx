import { View, Text} from 'react-native';
import SignOutButton from "@/components/clerk/SignOutButton";
import Gradient from "@/components/gradient";

export default function Index() {
    return (
        <>
            <Gradient position={'top'} isSpeaking={false}/>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Home screen</Text>
                <SignOutButton/>
            </View>
        </>
    );
}

