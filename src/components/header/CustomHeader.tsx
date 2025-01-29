import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import Colors from '../../theme/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '../../contexts/LanguageContext';

interface CustomHeaderProps {
    isFooter?: boolean;
    isLeftContentIcon?: boolean;
    isRightContentIcon?: boolean;
    leftContent: React.ReactNode;
    rightContent?: React.ReactNode;
    style?: ViewStyle;
    textStyle?: TextStyle;
    onLeftContentPress?: any,
    onRightContentPress?: any
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
    isFooter = false,
    isLeftContentIcon = false,
    isRightContentIcon = false,
    leftContent,
    rightContent = '',
    style,
    textStyle,
    onLeftContentPress,
    onRightContentPress
}) => {
    const insets = useSafeAreaInsets();
    const { isRTL } = useLanguage();
    const renderLeftContent = () => {
        return <TouchableOpacity onPress={onLeftContentPress}>
            {isLeftContentIcon ? leftContent :
                <Text style={[styles.text, textStyle]}>{leftContent}</Text>
            }
        </TouchableOpacity>
    };

    const renderRightContent = () => {
        return <TouchableOpacity onPress={onRightContentPress}>
            {isRightContentIcon ? rightContent :
                <Text style={[styles.text, { fontSize: isFooter ? 12 : 16, }, textStyle]}>{rightContent}</Text>

            }
        </TouchableOpacity>
    };
    return (
        <View style={[styles.container, { marginTop: insets.top + 15 }, style]}>
            {!isFooter && <View style={styles.line} />}
            <View style={[styles.row, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                <View style={[styles.leftContent, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>{renderLeftContent()}</View>
                <View style={[styles.rightContent, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>{renderRightContent()}</View>
            </View>
            {isFooter && <View style={[styles.line, styles.footerLine]} />}
        </View>
    );
};

const applyRowStyle = (isRTL: boolean): ViewStyle => {
    return {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // width: '100%',
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    line: {
        height: 2,
        backgroundColor: Colors.PRIMARY_GREEN,
        width: '100%',
        marginBottom: 10,
    },
    footerLine: {
        marginTop: 10,
        marginBottom: 39,
        height: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    leftContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: Colors.PRIMARY_GREEN,
    },
});

export default CustomHeader;
