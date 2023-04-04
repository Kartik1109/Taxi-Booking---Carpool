import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const OfferRide = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [numPeople, setNumPeople] = useState(1);

  const handleNumPeopleChange = (value) => {
    setNumPeople(value);
  };
  const [gender, setGender] = useState('');

const handleGenderSelection = (value) => {
  setGender(value);
};

  return (
    
    <View style={styles.container}>
  <Text style={styles.title}>Offer a Ride</Text>
  <View style={styles.inputContainer}>
    <Text style={styles.label}>Source Location:</Text>
    <TextInput
      style={styles.input}
      value={source}
      onChangeText={setSource}
      placeholder="Enter source location"
    />
  </View>
  <View style={styles.inputContainer}>
    <Text style={styles.label}>Destination Location:</Text>
    <TextInput
      style={styles.input}
      value={destination}
      onChangeText={setDestination}
      placeholder="Enter destination location"
    />
  </View>
  <View style={styles.inputContainer}>
    <Text style={styles.label}>Number of people:</Text>
    <View style={styles.radioContainer}>
      {[1, 2, 3, 4, 5].map((num) => (
        <TouchableOpacity
          key={num}
          onPress={() => handleNumPeopleChange(num)}
          style={[
            styles.radioButton,
            num === numPeople ? styles.radioButtonSelected : null,
          ]}
        >
          <Text
            style={[
              styles.radioButtonText,
              num === numPeople ? styles.radioButtonTextSelected : null,
            ]}
          >
            {num}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
  <View style={styles.inputContainer}>
    <Text style={styles.label}>Gender:</Text>
    <View style={styles.genderContainer}>
      <TouchableOpacity
        style={[styles.genderButton, gender === 'male' && styles.selectedGenderButton]}
        onPress={() => handleGenderSelection('male')}
      >
        <Text style={[styles.genderButtonText, gender === 'male' && styles.selectedGenderButtonText]}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.genderButton, gender === 'female' && styles.selectedGenderButton]}
        onPress={() => handleGenderSelection('female')}
      >
        <Text style={[styles.genderButtonText, gender === 'female' && styles.selectedGenderButtonText]}>Female</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.genderButton, gender === 'any' && styles.selectedGenderButton]}
        onPress={() => handleGenderSelection('any')}
      >
        <Text style={[styles.genderButtonText, gender === 'any' && styles.selectedGenderButtonText]}>Any</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textTransform: 'uppercase',
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  radioButtonText: {
    fontSize: 16,
    color: '#333',
  },
  radioButtonTextSelected: {
    color: '#fff',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '30%',
    alignItems: 'center',
  },
  genderButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  selectedGenderButton: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  selectedGenderButtonText: {
    color: '#fff',
  },
});

export default OfferRide;
