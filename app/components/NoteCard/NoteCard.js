import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from "react-native";
import { colors, fonts } from "../../constants/styles";

export default class NoteCard extends React.PureComponent {
  displayDate = d =>{
    const minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes();
    const hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();
    const ampm = d.getHours() >= 12 ? 'pm' : 'am';
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+' '+ampm;
  }
  displayDescription = description => {
    if(description.length > 150)
      description = description.substr(0, 150) + "..."
    return description.replace(/\n/g, " ");;
  }
  render() {
    const dateCreate = new Date(this.props.dateCreate);
    const displayDateCreate = this.displayDate(dateCreate);
    return (
      <TouchableHighlight
        underlayColor={colors.primary}
        onPress={() => console.log("touched!")}
      >
        <View>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <View style={styles.circle} />
              <Text style={styles.title}>{this.props.title}</Text>
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{this.displayDescription(this.props.description)}</Text>
              <Text style={styles.dateCreate}>{displayDateCreate}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingLeft: 60,
    // paddingRight: 40,
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
    color: colors.textPrimary,
    fontFamily: "Gilroy",
    fontSize: fonts.lg,
    fontWeight: "900",
    paddingLeft: 15
  },
  description: {
    color: colors.textSecondary,
    fontFamily: "Inter UI",
    fontSize: fonts.md,
    paddingBottom: 10
  },
  dateCreate: {
    color: colors.textPrimary,
    fontFamily: "Inter UI",
    fontSize: fonts.sm,
    paddingBottom: 10
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
  }
});
