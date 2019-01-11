import React, {PureComponent} from "react";
import {View, FlatList, Text} from "react-native";
import { observer, inject } from "mobx-react/native";

@inject("labels")
@observer
export default class Labels extends PureComponent{
    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }
    renderItem = ({item}) => {
        <View>
            <Text>{item.Name}</Text>
        </View>
    }
    render(){
        <View>
            <FlatList 
            data={this.props.labels.labelsList}
            renderItem={this.renderItem}
            keyExtractor={item => item.id.toString()}/>
        </View>
    }
}