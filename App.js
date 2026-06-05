import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [red, setRed] = useState(120);
  const [green, setGreen] = useState(80);
  const [blue, setBlue] = useState(200);

  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  const hexColor = useMemo(() => {
    const toHex = (value) => value.toString(16).padStart(2, '0').toUpperCase();
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
  }, [red, green, blue]);

  return (
    <View style={[estilos.container, { backgroundColor: rgbColor }]}>
      <View style={estilos.content}>
        <View style={estilos.infoCard}>
          <Text style={estilos.title}>Seletor de Cores</Text>
          <Text style={estilos.hexText}>{hexColor}</Text>
          <Text style={estilos.rgbText}>{rgbColor}</Text>
        </View>

        <View style={estilos.controls}>
          <ColorSlider
            label="Vermelho"
            value={red}
            onChange={setRed}
            color="#ff3b30"
          />

          <ColorSlider
            label="Verde"
            value={green}
            onChange={setGreen}
            color="#34c759"
          />

          <ColorSlider
            label="Azul"
            value={blue}
            onChange={setBlue}
            color="#007aff"
          />
        </View>
      </View>
    </View>
  );
}

function ColorSlider({ label, value, onChange, color }) {
  return (
    <View style={estilos.sliderContainer}>
      <View style={estilos.labelRow}>
        <Text style={estilos.label}>{label}</Text>
        <Text style={estilos.valueText}>{value}</Text>
      </View>

      <Slider
        minimumValue={0}
        maximumValue={255}
        step={1}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor={color}
        maximumTrackTintColor="#ddd"
        thumbTintColor={color}
        style={estilos.slider}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  infoCard: {
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  title: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: '600',
    opacity: 0.8,
  },
  hexText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 8,
    fontFamily: 'System',
  },
  rgbText: {
    fontSize: 16,
    opacity: 0.7,
  },
  controls: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 15,
    borderRadius: 20,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingHorizontal: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  slider: {
    width: '100%',
    height: 40,
  },
});