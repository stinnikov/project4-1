import { ipv4 } from '../data/tempData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeDataAsync = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
    }
};
export const getDataAsync = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        alert("error reading value");
    }
};

export const isAuthorisedAsync = async () => {
    //await AsyncStorage.clear();

    var userId = await getDataAsync("userId");
    if (!userId) {
        const response = await fetch(`${ipv4}/partialyCreateUser`);
        let userId = await response.json();
        console.log(userId);
        storeDataAsync("userId", userId);
    }
    else {
        //vse ok
    }
    return true;
}

export default () => { }