import React from "react";
import { ViewStyle, TouchableOpacity } from "react-native";
import { buttonStyles } from "@/src/styles/styles";
import svgIcons from "@/src/assets/icons/svgIcons";
import useNavigationStore from "@/src/store/navigationStore";

interface BackButtonComponentProps {
    style?: ViewStyle,
}

export const BackButtonComponent: React.FC<BackButtonComponentProps> = React.memo((props) => {
    const { navigateBack } = useNavigationStore();

    return (
        <TouchableOpacity style={[buttonStyles.miniButton, props.style]}
            onPress={navigateBack}>
            <svgIcons.BackArrowIcon width={20} height={20}></svgIcons.BackArrowIcon>
        </TouchableOpacity>
    )
})

export default BackButtonComponent;