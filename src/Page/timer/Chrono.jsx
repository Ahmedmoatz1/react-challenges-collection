import React, { useState, useEffect } from 'react';

function Chrono() {
  const [tenths, setTenths] = useState(0); // العداد بالأعشار (كل 1 = 100 مللي ثانية)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      // شغل مؤقت يزود العداد 1 كل 100 مللي ثانية
      timer = setInterval(() => {
        setTenths((prev) => prev + 1);
      }, 100);
    }

    // التنظيف عند الإيقاف أو الخروج
    return () => clearInterval(timer);
  }, [isRunning]);

  // دالة تنسيق الوقت إلى MM:SS.S
  const formatTime = (currentTenths) => {
    const tenthsDisplay = currentTenths % 10;
    const totalSeconds = Math.floor(currentTenths / 10);
    const secondsDisplay = totalSeconds % 60;
    const minutesDisplay = Math.floor(totalSeconds / 60);

    // إضافة صفر في البداية للأرقام أقل من 10
    const pad = (num) => String(num).padStart(2, '0');

    return `${pad(minutesDisplay)}:${pad(secondsDisplay)}.${tenthsDisplay}`;
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning); // عكس الحالة
  };

  const handleStop = () => {
    setIsRunning(false); // وقف التشغيل
    setTenths(0);         // رجع العداد للصفر
  };

  return (
    <div style={styles.container}>
     
      <div style={styles.timerDisplay}>
        
        <h1 style={styles.timerText}>{formatTime(tenths)}</h1>
      </div>

      <div style={styles.buttonGroup}>
        <button 
          onClick={handleStartPause} 
          aria-label={isRunning ? 'Pause' : 'Play'}
          style={{
            ...styles.button, 
            backgroundColor: isRunning ? '#e74c3c' : '#2ecc71'
          }}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>

        <button 
          onClick={handleStop} 
          aria-label="Stop"
          style={{ ...styles.button, backgroundColor: '#95a5a6' }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

// تصميم CSS باستخدام JavaScript Objects
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif',
  },
  timerDisplay: {
    marginBottom: '20px',
    background: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)',
    minWidth: '200px',
    textAlign: 'center',
  },
  timerText: {
    margin: 0,
    fontSize: '36px',
    color: '#333',
    fontWeight: 'bold',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '12px 24px',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'opacity 0.2s',
  },
};

export default Chrono;