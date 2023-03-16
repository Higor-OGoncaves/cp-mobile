import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Audio } from "expo-av";

import aud1 from '../../assets/som1.mp3';
import aud2 from '../../assets/som2.mp3';
import aud3 from '../../assets/som3.mp3';
import aud4 from '../../assets/som4.mp3';
import aud5 from '../../assets/som5.mp3';
import aud6 from '../../assets/som6.mp3';
import aud7 from '../../assets/som7.mp3';

export default function Home() {
  const [text, setText] = useState("");
  const [soundPlaying, setSoundPlaying] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState("");
  
  
  const sons = {
    'A': new Audio.Sound(),
    'B': new Audio.Sound(),
    'C': new Audio.Sound(),
    'D': new Audio.Sound(),
    'E': new Audio.Sound(),
    'F': new Audio.Sound(),
    'G': new Audio.Sound()
  };

  async function loadSounds() {
    await sons['A'].loadAsync(aud1);
    await sons['B'].loadAsync(aud2);
    await sons['C'].loadAsync(aud3);
    await sons['D'].loadAsync(aud4);
    await sons['E'].loadAsync(aud5);
    await sons['F'].loadAsync(aud6);
    await sons['G'].loadAsync(aud7);
  }

  async function playSound(letter) {
    if (sons[letter]) {
      if (soundPlaying) {
        await soundPlaying.stopAsync();
      }
      setSoundPlaying(sons[letter]);
      await sons[letter].playAsync();
    }
  }

  function stopSound() {
    if (soundPlaying) {
      soundPlaying.stopAsync();
      setSoundPlaying(null);
    }
  }

  
  if (!sons['A']._loaded) {
    loadSounds();
  }
  if (!sons['B']._loaded) {
    loadSounds();
  }
  if (!sons['C']._loaded) {
    loadSounds();
  }
  if (!sons['D']._loaded) {
    loadSounds();
  }
  if (!sons['E']._loaded) {
    loadSounds();
  }
  if (!sons['F']._loaded) {
    loadSounds();
  }
  if (!sons['G']._loaded) {
    loadSounds();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
  style={[styles.button, selectedLetter === 'A' && styles.selectedButton]} 
  onPress={() => {
    playSound('A');
    setSelectedLetter('A');
  }}
>
  <Text style={styles.buttonText}>A</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={[styles.button, selectedLetter === 'B' && styles.selectedButton]} 
  onPress={() => {
    playSound('B');
    setSelectedLetter('B');
  }}
>
  <Text style={styles.buttonText}>B</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedLetter === 'C' && styles.selectedButton]} 
  onPress={() => {
    playSound('C');
    setSelectedLetter('C');
  }}
>
  <Text style={styles.buttonText}>C</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={[styles.button, selectedLetter === 'D' && styles.selectedButton]} 
  onPress={() => {
    playSound('D');
    setSelectedLetter('D');
  }}
>
  <Text style={styles.buttonText}>D</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={[styles.button, selectedLetter === 'E' && styles.selectedButton]} 
  onPress={() => {
    playSound('E');
    setSelectedLetter('E');
  }}
>
  <Text style={styles.buttonText}>E</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={[styles.button, selectedLetter === 'F' && styles.selectedButton]} 
  onPress={() => {
    playSound('F');
    setSelectedLetter('F');
  }}
>
  <Text style={styles.buttonText}>F</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={[styles.button, selectedLetter === 'G' && styles.selectedButton]} 
  onPress={() => {
    playSound('G');
    setSelectedLetter('G');
  }}
>
  <Text style={styles.buttonText}>G</Text>
</TouchableOpacity>

      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Aperte ou Digite uma letra A,B,C,D,E,F,G"
      />
      <TouchableOpacity style={styles.button} onPress={() => playSound(text)}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor: '#808080'}]} onPress={() => stopSound()}>
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 2,
    marginHorizontal: 15,
    textAlign: "center",
  },
  buttonText: {
    flexDirection: "row",
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
