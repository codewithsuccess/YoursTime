// Time update in sec 
setInterval(watch = () => {
    const FullDate = new Date();
    const Time = FullDate.getHours().toString().padStart(2, '0') + ':' + FullDate.getMinutes().toString().padStart(2, '0') + ':' + FullDate.getSeconds().toString().padStart(2, '0');
    const gatey = FullDate.toLocaleDateString();

    document.getElementById('watch').innerHTML = Time;
    document.getElementById('gatey').innerHTML = gatey;

}, 1000);

// const date = new Date();
// const minutes = date.getMinutes().toString().padStart(2, '0');
// console.log(minutes); // Outputs minutes with leading zero (e.g., "05" or "10")

// const d = new Date();
// const day = d.getDay(); // 0 (for Sunday) to 6 (for Saturday)
// const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const dayName = weekdays[d.getDay()]; // e.g., "Tuesday"
// console.log(dayName);
