import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from "react-native";
import { colors, fonts, fontStyles } from "../../constants/styles";

export default class NoteCard extends React.PureComponent {
  onPress = () => (
    this.props.onPress(this.props.id)
  )
  renderLabel = (labelId) => {
    const selectedLabel = this.props.labelsSource.find(l=>l.id === labelId)
    return (
    <View key={labelId} style={{...styles.label, backgroundColor: selectedLabel.color.value}}>
      <Text style={styles.labelText}>{selectedLabel.name}</Text>
    </View>
    )
    
  }
  render() {
    const dateCreate = new Date(this.props.dateCreated);
    const displayDateCreate = this.displayDate(dateCreate);
    return (
      <TouchableHighlight
        underlayColor={colors.primary}
        onPress={this.onPress}
      >
        <View>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <View style={styles.circle} />
              <Text style={styles.title}>{this.props.title}</Text>
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{this.displayDescription(this.props.description)}</Text>
              <View style={styles.infoContainer}>
                <Text style={styles.dateCreate}>{displayDateCreate}</Text>
                {this.props.labels.map(label => this.renderLabel(label))}
              </View>
              
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
  displayDate = d =>{
    const minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes();
    const hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();
    const ampm = d.getHours() >= 12 ? 'pm' : 'am';
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+' '+ampm;
  }
  displayDescription = description => {
    if(description.length > 150)
      description = description.substr(0, 150) + "..."
    return description.replace(/\n/g, " ");;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingVertical: 5
  },
  descriptionContainer: {
    paddingLeft: 60,
    paddingRight: 40
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 38,
    paddingRight: 40,
    paddingBottom: 10
  },
  title: {
    ...fontStyles.gilroy,
    color: colors.textPrimary,
    fontSize: fonts.lg,
    paddingLeft: 15
  },
  description: {
    ...fontStyles.interUi,
    color: colors.textSecondary,
    fontSize: fonts.md,
    paddingBottom: 10
  },
  dateCreate: {
    ...fontStyles.interUi,
    color: colors.textPrimary,
    fontSize: fonts.sm,
    marginRight: 5
  },
  separator: {
    backgroundColor: "#E3E3E3",
    height: 1
  },
  circle: {
    alignItems: "flex-end",
    borderRadius: 7,
    backgroundColor: colors.primary,
    width: 7,
    height: 7
  },
  infoContainer:{
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10
  },
  label:{
    alignSelf: "center",
    justifyContent:"center",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginHorizontal: 2
  },
  labelText:{
    ...fontStyles.interUi,
    color: colors.light,
    fontSize: fonts.sm,
  }
});
