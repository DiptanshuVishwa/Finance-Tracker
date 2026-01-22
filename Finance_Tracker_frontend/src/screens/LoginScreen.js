import { View, Text, Button } from 'react-native';
import api from '../api/api';

export default function LoginScreen() {
  const testLogin = async () => {
    try {
      const res = await api.post('/auth/login', {
        email: 'test@example.com',
        password: '123456'
      });
      console.log(res.data);
      alert('Backend connected!');
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert('Error connecting backend');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Finance Tracker</Text>
      <Button title="Test Backend Connection" onPress={testLogin} />
    </View>
  );
}
