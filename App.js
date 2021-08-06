import React, { useState } from 'react';
import { View } from 'react-native'
import { TextInput, Button, RadioButton, Text } from 'react-native-paper';

const App = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [checked, setChecked] = useState('male')

  submit = () => {
    alert(`You name is ${name}, a ${checked} and you are ${age} years old`)
  }

  return (
    <View>
        <TextInput label="Name" value={name} onChangeText={ name => setName(name) } />

        <View>
          <Text>Male</Text>
          <RadioButton 
            value='Male' 
            status={checked === 'male' ? 'checked' : 'unchecked'} 
            onPress={() => setChecked('male')}
          />
        </View>

        <View>
        <Text>Female</Text>
          <RadioButton 
            value='Female' 
            status={checked === 'female' ? 'checked' : 'unchecked'} 
            onPress={() => setChecked('female')}
          />
        </View>
        <TextInput label="Age" value={age} onChangeText={ age => setAge(age) } />
        <Button mode="contained" onPress={() => submit()}>Submit</Button>
    </View>
  )
}

export default App