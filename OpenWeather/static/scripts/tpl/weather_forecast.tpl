<div class="item">
	<h2 class="title">6 DAYS FORECAST</h2>
	{@each data.list as item}
	<ul class="day-item">
            <li>${item.dt|getDates}</li>
            <li style="height:100px;background:url(https://785hoc.com1.z0.glb.clouddn.com/weather_icons/s/${item.weather[0].icon}.png) no-repeat center center"></li>
            <li>${item.weather[0].description}</li>
            <li class="max">${(item.temp.max).toFixed(1)}&deg;</li>
            <li class="min">${(item.temp.min).toFixed(1)}&deg;</li>
            <li>${item.humidity} %</li>
            <li>${item.pressure} hpa</li>
            <li>${item.speed} m/s ${item.deg|degToCompass}</li>
    </ul>
    {@/each}
</div>