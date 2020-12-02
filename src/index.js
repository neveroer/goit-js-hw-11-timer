import './styles.css';
import CountdownTimer from './CountdownTimer'; 

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 2, 2020, 16:37:00')
});
