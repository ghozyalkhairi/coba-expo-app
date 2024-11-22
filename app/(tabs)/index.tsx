import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const data = [{ isi: "Catatan Saya" }, { isi: "Catatan Lama" }];

export default function HomeScreen() {
  const [listCatatan, setListCatatan] = useState(data);

  const [newCatatan, setNewCatatan] = useState("");

  const tambahCatatan = (catatanBaru: { isi: string }) => {
    setListCatatan([...listCatatan, catatanBaru]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aplikasi CatatanKu</Text>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Tambah Catatan</Text>
        <TextInput
          placeholder="Isi catatan..."
          style={styles.input}
          placeholderTextColor="#999"
          value={newCatatan}
          onChangeText={(text) => setNewCatatan(text)}
        />
        <Button
          title="Simpan"
          onPress={() => tambahCatatan({ isi: newCatatan })}
        />
      </View>

      <Text style={styles.sectionTitle}>Daftar Catatan</Text>
      <FlatList
        data={listCatatan}
        keyExtractor={(item) => item.isi}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.isi}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f7f8fc",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 24,
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 24,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#444",
    marginBottom: 12,
  },
  listContainer: {
    paddingBottom: 24,
  },
  noteItem: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  noteText: {
    fontSize: 16,
    color: "#333",
  },
});
