# TP: Acceso a Multimedia - Video (Expo + expo-av)

Este repositorio contiene un ejemplo mínimo para reproducir video local y remoto en Android e iOS usando Expo SDK 51 y la librería `expo-av`.

## Resumen de la consigna
- **Objetivo**: Reproducir un video (local y remoto) con controles (play, pause, seek, fullscreen, etc.).
- **Versión RN/Expo**:
  - React Native >= 0.60 soporta integración con librerías de video.
  - Con Expo: usar SDK 48+ (recomendado 51 en 2025). Este proyecto usa SDK 51.
- **Librerías**:
  - `expo-av` (Expo): simple, oficial, sin configuración nativa.
  - `react-native-video` (bare RN): muy flexible, requiere configuración nativa.
  - Para este TP conviene `expo-av` por facilidad en Expo.
- **Instalación**:
  - Expo (managed): `npx expo install expo-av`
  - React Native bare: `npm install react-native-video`
- **Plataformas / permisos**:
  - En Expo no se editan `AndroidManifest.xml`/`Info.plist` directo; todo va en `app.json`.
  - Para permitir HTTP no seguro (si tu URL no usa HTTPS), este ejemplo activa:
    - Android: `android.usesCleartextTraffic = true`
    - iOS: `ios.infoPlist.NSAppTransportSecurity.NSAllowsArbitraryLoads = true`
  - No se requieren permisos de usuario para reproducir videos locales o remotos. Si accedés a archivos del dispositivo, usar `expo-document-picker` o `expo-media-library`.

## Estructura
- `App.js`: ejemplo con video local (`./assets/tu-video-6s.mp4`) y remoto (URL pública).
- `app.json`: configuraciones de plataforma (excepciones de red para HTTP).
- `assets/`: colocar el MP4 local aquí.

## Pasos rápidos (EXPO)
1. Colocá tu video en `./assets/` con nombre `tu-video-6s.mp4` (o cambiá la ruta en `App.js`).
2. Instalá dependencias:
   ```bash
   npm install
   # si fuera necesario: npx expo install expo-av
   ```
3. Ejecutá con túnel (para que cualquiera en clase pueda escanear el QR):
   ```bash
   npm run start
   # equivalente: npx expo start --tunnel
   ```
4. Abrí Expo Go en el celular y escaneá el QR. Verás el video local y el remoto con controles nativos.

### Notas importantes
- El asset local se sirve dentro del bundle, no depende de red.
- `--tunnel` ayuda cuando la red del aula complica las conexiones.
- Si el video es muy grande, puede tardar en cargar. Se recomienda un clip corto o comprimido.

## Código mínimo (local)
```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  return (
    <View style={styles.container}>
      <Video
        source={require('./assets/tu-video-6s.mp4')}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  video: { width: '90%', height: 220 },
});
```

## Presentación
- Podés mostrar en vivo escaneando el QR de `expo start --tunnel`.
- Este repo es público y contiene el ejemplo comentado.

## Comparativa rápida
- `expo-av`: sin configuración nativa, ideal para Expo/educativo.
- `react-native-video`: más control fino en proyectos bare RN.
