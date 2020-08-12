import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

interface TeacherTimeItem {
  enabled: boolean;
  week_day: number;
  from: number;
  to: number;
}

const TeacherTimeItem: React.FC<TeacherTimeItem> = (props) => {
    function getWeekDayName(week_day: number){
        if (week_day === 1){
            return 'Segunda';
        }
        if (week_day === 2){
            return 'Terca-Feira';
        }
        if (week_day === 3){
            return 'Quarta-Feira';
        }
        if (week_day === 4){
            return 'Quinta-Feira';
        }
        if (week_day === 5){
            return 'Sexta-Feira';
        }
    }

  return (
    <View style={styles.container}>
      <View style={styles.middleContainer}>
        <View style={styles.middleTextContainer}>
          <Text style={styles.middleContainerTitle}>Dia</Text>
          <Text style={styles.middleContainerTitle}>Horário</Text>
        </View>
        <View style={props.enabled ? styles.timeContainer : styles.timeContainerDisabled}>
  <Text style={styles.timeContainerTitle}>{getWeekDayName(props.week_day)}</Text>
          <Text style={styles.timeContainerTitle}>---{">"}</Text>
          <Text style={styles.timeContainerTitle}>
            {props.enabled ? (props?.from / 60).toFixed(2) : "-"} -{" "}
            {props.enabled ? (props?.to / 60).toFixed(2) : ""}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TeacherTimeItem;
