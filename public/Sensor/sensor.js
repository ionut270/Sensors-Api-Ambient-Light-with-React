let val = 0;
window.addEventListener('load', (event) => {
    console.log("Test");
    const details = document.getElementById("equal-wrapper");
    if (window.AmbientLightSensor) {
        try {
            const sensor = new AmbientLightSensor();
            sensor.onreading = () => {
                details.style = "background: linear-gradient(to right, rgb(" + sensor.illuminance + ", 153, 0.133), rgb(" + sensor.illuminance + ", 84, 46))";
            }
            sensor.onerror = event => document.getElementById("details").innerHTML = event.error.message;
            sensor.start();
        } catch (err) {
            //details.innerHTML = err.message;
            console.log("Looks like there is an error with you'r sensor : " + err.message);
        }
    } else {
        //details.innerHTML = 'It looks like your browser doesnt support this feature';
        console.log("You'r device dosen't support this feature ! ( AmbientLightSensor )");
    }
});