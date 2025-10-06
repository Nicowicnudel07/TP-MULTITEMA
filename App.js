import React, { useRef } from 'react';
import { View, StyleSheet, Text, Platform, ScrollView } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>TP: Acceso a Multimedia - Video</Text>
      <Text style={styles.subtitle}>Ejemplo con expo-av (Expo SDK 51)</Text>

      <Text style={styles.section}>1) Video local (asset)</Text>
      <Video
        ref={localVideo}
        source={require('./assets/14489040_3840_2160_25fps.mp4')}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        shouldPlay={false}
        isLooping
      />
      <Text style={styles.hint}>
        Colocá tu MP4 en ./assets/ con nombre tu-video-6s.mp4 (o ajustá la ruta en App.js)
      </Text>

      <Text style={styles.section}>2) Video remoto (URL)</Text>
      <Video
        ref={remoteVideo}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        shouldPlay={false}
      />
      <Text style={styles.hint}>
        Si usás HTTP no seguro, activamos excepciones en app.json para Android e iOS.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Plataforma: {Platform.OS.toUpperCase()} | Controles nativos: Play / Pause / Seek / Fullscreen
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 64,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 4,
    marginBottom: 16,
    color: '#666'
  },
  section: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600'
  },
  video: {
    width: '90%',
    height: 220,
    backgroundColor: '#000',
    borderRadius: 8,
  },
  hint: {
    width: '90%',
    color: '#555',
    fontSize: 12,
    marginTop: 6,
  },
  footer: {
    marginTop: 24,
  },
  footerText: {
    color: '#444'
  }
});
