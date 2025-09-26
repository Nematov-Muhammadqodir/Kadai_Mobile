import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../../constants/colors";

export default function CountdownTimer() {
  // Set target date (20 days from now)
  const targetDate = new Date().getTime() + 20 * 24 * 60 * 60 * 1000; // 20 days in ms

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Until The End Of The Sale:</Text>
      <Text style={styles.timerText}>
        {timeLeft.days} <Text style={styles.timeType}>Days</Text>{" "}
        {timeLeft.hours} <Text style={styles.timeType}>Hours</Text>{" "}
        {timeLeft.minutes} <Text style={styles.timeType}>Mins</Text>{" "}
        {timeLeft.seconds} <Text style={styles.timeType}>Seconds</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.gray800,
    paddingVertical: 7,
  },
  headerText: {
    color: Colors.discountRedColor,
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 18,
  },
  timerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.discountRedColor,
  },
  timeType: {
    fontWeight: 400,
  },
});
