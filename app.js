// let hiruja = "smart"

  function updateAge() {

    const dob = new Date('2010-10-02T18:19:00Z');
    
 
    const currentDate = new Date();
    

    let differenceMs = currentDate - dob;
    

    const years = Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 365.25));
    differenceMs -= years * (1000 * 60 * 60 * 24 * 365.25);
    

    const months = Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 30.44));
    differenceMs -= months * (1000 * 60 * 60 * 24 * 30.44);
    

    const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    differenceMs -= days * (1000 * 60 * 60 * 24);
    

    const hours = Math.floor(differenceMs / (1000 * 60 * 60));
    differenceMs -= hours * (1000 * 60 * 60);
    

    const minutes = Math.floor(differenceMs / (1000 * 60));
    differenceMs -= minutes * (1000 * 60);
    
    const seconds = Math.floor(differenceMs / 1000);
    
   
    const currentYear = new Date().getFullYear();
    document.getElementById("years").innerText = years
    document.getElementById("months").innerText = months
    document.getElementById("days").innerText = days
    document.getElementById("hours").innerText = hours
    document.getElementById("minutes").innerText = minutes
    document.getElementById("seconds").innerText = seconds


}

// while (hiruja == "smart") {
//     document.getElementById("years").innerText = years
//     document.getElementById("months").innerText = months
//     document.getElementById("days").innerText = seconds
// }

updateAge()

setInterval(updateAge, 1000)
