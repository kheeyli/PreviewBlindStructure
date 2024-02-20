export function generateBlindsStructure(gameTime, raiseBlindTime) {
    let blindsStructure = [];
    let time = 3 * 60; // Start time at 3:00
    let level = 0; // Start with level 0
    let blinds = '1/2'; // Start with 1/2 blinds
  
    while (time <= gameTime) {
      // Increment level
      level++;
  
      // Format time
      let formattedTime = formatTime(time);
  
      // Push blinds structure to the array
      blindsStructure.push({ level: level, time: formattedTime, blinds: blinds });
  
      // Multiply both numerator and denominator of blinds by 2 for the next level
      let [numerator, denominator] = blinds.split('/');
      blinds = `${parseInt(numerator) * 2}/${parseInt(denominator) * 2}`;
  
      // Increment time by 3 minutes
      time += raiseBlindTime;
    }
  
    return blindsStructure;
  }
  
  export function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 60);
    const minutes = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
  