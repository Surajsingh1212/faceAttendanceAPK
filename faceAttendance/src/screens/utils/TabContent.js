import Home from '../home/Home';
import Profile from '../home/Profile';
import AttendanceRecords from '../home/AttendanceRecords';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FaceRegistration from '../home/FaceRegistration';

const screens = [
    {
      name: 'Home',
      component: Home,
      label: 'Home',
      icon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
    },
    {
      name: 'FaceRegistration',
      component: FaceRegistration,
      label: 'Scan Face',
      icon: ({ color, size }) => <Icon name="camera-marker" color={color} size={size} />,
    },
    {
      name: 'AttendanceRecords',
      component: AttendanceRecords,
      label: 'Attendance',
      icon: ({ color, size }) => <Icon name="calendar-multiple-check" color={color} size={size} />,
    },
    {
      name: 'Profile',
      component: Profile,
      label: 'Profile',
      icon: ({ color, size }) => <Icon name="account-outline" color={color} size={size} />,
    },
  ];
  
  export default screens;