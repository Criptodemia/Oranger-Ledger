import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard';

export default function CoursesScreen({ navigation }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://TU-IP-LOCAL:5000/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Cargando cursos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <CourseCard
            title={item.title}
            progress={item.progress}
            instructor={item.instructor}
            onPress={() => navigation.navigate('Lección', { courseId: item._id })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({...});
