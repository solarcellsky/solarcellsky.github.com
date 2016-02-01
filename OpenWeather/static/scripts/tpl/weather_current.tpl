<div class="item">
	<time class="time-now">${data.dt|getDates} ${data.dt|getTimes}</time>
	<div class="local">${data.name}, ${data.sys.country}</div>
	<p>${data.weather[0].description}
	风向 ${data.wind.deg|degToCompass} (${(data.wind.deg).toFixed(2)}&deg;)</p>
	<h2 class="weather-current-temp">${(data.main.temp).toFixed(1)}&deg;</h2>
	<span class="w-icon-l" style="display:block;width:175px;height:120px;margin:0 auto;background:url(http://openweather.u.qiniudn.com/weather_icons/${data.weather[0].icon}.png) no-repeat 0 0"></span>
	<p>
	湿度:${data.main.humidity} %
	风速:${data.wind.speed} m/s
	气压:${data.main.pressure} hPa
	<br>
	日出:${data.sys.sunrise|getTimes}
	日落:${data.sys.sunset|getTimes}
	</p>
</div>