import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import '@ant-design/v5-patch-for-react-19'; //ant
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Admin from './components/AdminDashboard';
import Employee from './components/EmployeeDashboard';


function App() {

  return (
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/employee" element={<Employee/>} />
      </Routes>
  );
}

export default App;
