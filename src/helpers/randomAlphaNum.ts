export const generateRandomClassSection = () => {
    const characters = ['A', 'B', 'C', 'D', 'E'];
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters[randomIndex];
    return randomChar;
  }
export const generateRandomClass = ()=>{
    return Math.floor(Math.random() * 10) + 1
}
export const generateRandomAttendance = ()=>{
    const characters = ['Absent', 'Present', 'Leave'];
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters[randomIndex];
    return randomChar;
}