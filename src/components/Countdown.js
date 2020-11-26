import React, { useEffect } from 'react';
import '../css/Countdown.css';


const Countdown = (props) => { 
    useEffect(() => {
            const countDownDate = new Date(props.date).getTime();
            const x = setInterval(() => {

                const now = new Date().getTime();
                const distance = countDownDate - now;
            
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
                document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            
                if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "Oktsjon lõppenud";
                }
            }, 1000);
  
        return () => {
            clearTimeout(x);
        }
    }, [props.date])

    return(
        <div>
            <p id='countdown'></p>
        </div>
    );
}

export default Countdown;






