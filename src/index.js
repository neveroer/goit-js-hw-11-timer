import './styles.css';
import CountdownTimer from './CountdownTimer'; 

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2020, 23:59:59')
});
