<script>
    let lat, long, timestamp, speed, altitude, visibility;
    function findISS() {
        fetch("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response => response.json())
        .then(data => {
            lat = data.latitude.toFixed(2);
            long = data.longitude.toFixed(2);
            timestamp = new Date(data.timestamp * 1000).toUTCString();
            speed = data.velocity.toFixed(2);
            altitude = data.altitude.toFixed(2);
            visibility = data.visibility;
            return lat, long, timestamp, speed, altitude, visibility;
        })
        .catch(e => console.log(e));
    }
    findISS();
</script>

<main>
	<div class="marquee">
        <div class="marquee-inner" aria-hidden="true">
            <span><b>ISS Location 🛰 :</b> {lat}, {long}, {timestamp}, {speed}, {altitude}, {visibility}</span>
        </div>
    </div>
</main>

<style>
    .marquee {
        position: relative;
        color: rgb(85, 85, 85);
        /* overflow: hidden; */
        --offset: 20vw;
        --move-initial: calc(-25% + var(--offset));
        --move-final: calc(-50% + var(--offset));
    }

    .marquee-inner {
        width: fit-content;
        display: flex;
        position: relative;
        transform: translate3d(var(--move-initial), 0, 0);
        animation: marquee 18s linear infinite;
    }

    .marquee span {
        font-size: 1.3ch;
        padding: 0 2vw;
    }

    .marquee:hover .marquee-inner {
        animation-play-state: running;
    }

    @keyframes marquee {
        from {
            transform: translateX(100%);
        }
        to { 
            transform: translateX(-100%);
        }
    }
</style>
