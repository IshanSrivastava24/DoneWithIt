import React from 'react';
import { View, Image , StyleSheet, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'; 


import colors from '../config/colors';
import AppText from './AppText';

function ListItem({title , subTitle , image , onPress , renderRightActions , ImageComponent: IconComponent}) {
    return (
        <Swipeable
        renderRightActions={renderRightActions}
        >
        <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
        >
        <View style={styles.container}>
        {IconComponent}
            {image && <Image style={styles.image}source={image}/>}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.medium,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center"
    }
})

export default ListItem;