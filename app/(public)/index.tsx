import { View, Text} from 'react-native';
import SignIn from "@/components/clerk/SignIn";


export default function Index() {
    return (
        <SignIn signUpUrl='/sign-up' scheme='betotutorial' homeUrl='(protected)'/>
    );
}

