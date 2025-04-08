import { StyleSheet } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function UsersScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D1C4E9", dark: "#311B92" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#9575CD"
          name="person.3.fill"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Users</ThemedText>
      </ThemedView>

      <ThemedView style={styles.userList}>
        {["Alice", "Bob", "Charlie", "David"].map((user) => (
          <ThemedView key={user} style={styles.userCard}>
            <ThemedText type="subtitle">{user}</ThemedText>
            <ThemedText>Active User</ThemedText>
          </ThemedView>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#9575CD",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  userList: {
    gap: 16,
  },
  userCard: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
});
