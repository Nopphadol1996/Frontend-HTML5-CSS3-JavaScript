const timeEl = document.querySelector(".time");// 10:30:00 แสดงเวลา
const btnToggle = document.querySelector(".toggle");

function setTime(){
    // console.log(new Date()); // วันที่ปัจจุบัน
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    // console.log(hours,minutes,seconds);

    timeEl.innerHTML = `${hours}:
    ${minutes < 10 ? `0${minutes}`: minutes}:
    ${seconds < 10 ? `0${seconds}`:seconds}`
}

btnToggle.addEventListener("click",(e)=>{
    const html=document.querySelector('html')
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML="โหมดกลางคืน"
    }else{
        html.classList.add("dark")
        e.target.innerHTML="โหมดกลางวัน"
    }
})
setTime()
setInterval(setTime,1000) // เรียกใช้ฟังก์ชันทุก 1 วินาที