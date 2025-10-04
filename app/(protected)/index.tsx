import { View, Text} from 'react-native';
import SignOutButton from "@/components/clerk/SignOutButton";
import Gradient from "@/components/gradient";
import SessionScreen from "@/components/screens/SessionScreen";

export default function Index() {
    return (
        <>
            <Gradient position={'top'} isSpeaking={false}/>
            <SessionScreen/>
        </>
    );
}

