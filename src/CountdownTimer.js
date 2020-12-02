export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.days = document.querySelector(`${selector} [data-value="days"]`);
    this.hours = document.querySelector(`${selector} [data-value="hours"]`);
    this.minutes = document.querySelector(`${selector} [data-value="mins"]`);
    this.seconds = document.querySelector(`${selector} [data-value="secs"]`);
    this.targetDate = targetDate;
    this.intervalId = null;
    if ((new Date(this.targetDate) - Date.now()) > 0)
      this.startTimer();
  }

  startTimer() {
    this.onTick();
    this.intervalId = setInterval(() => this.onTick(), 1000);   
  }

  onTick() {
    let timeData = this.getLeft();
    this.updateDOM(timeData);
  }

  getLeft() {
    let date = new Date(this.targetDate) - Date.now();

    const days = Math.floor(date / (1000 * 60 * 60 * 24));
    const hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((date % (1000 * 60)) / 1000);
        
    if (days === 0 && hours === 0 && mins === 0 && secs === 0) {
      clearInterval(this.intervalId);
    }
        
    return { days, hours, mins, secs };
  }

  updateDOM(left) {
    this.days.textContent = String(left.days).padStart(2, '0');
    this.hours.textContent = String(left.hours).padStart(2, '0');
    this.minutes.textContent = String(left.mins).padStart(2, '0');
    this.seconds.textContent = String(left.secs).padStart(2, '0');
  }
}