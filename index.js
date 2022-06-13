<!-- Results div -->
            <div class="col-9" id="results-div"> -->

                <!-- Current weather section -->
                <section id="current-weather" class="bg-light">
                    <div id="current-weather-header" class="dimmer-switch">
                        <h2 id="results-header">Your City | Date | </h2>
                    <img id='current-icon' src='http://openweathermap.org/img/wn/10d@2x.png'>
                    </div>
                    <p id="temp-result" class="dimmer-switch">Temperature:</p>
                    <p id="humid-result" class="dimmer-switch">Humidity: </p>
                    <p id="wind-result" class="dimmer-switch">Wind Speed: </p>
                    <p id="uv-result" class="dimmer-switch">UV Index: <span id="uv-condition"></span></p>
                </section>

                <!-- 5-day forecast section -->
                <section id="forecast-result" class="bg-light">
                    <div id="forecast-header">
                        <h3 class="dimmer-switch">5-Day Forecast:</h3>
                    </div>

                    <div id="cards-container" class="d-flex justify-content-between dimmer-switch">
                        <!-- Card 1 -->
                        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;" id="card-1">
                            <div class="card-header" id="card-header-1">Date</div>
                            <div>
                            <img id="card-icon-1" src="http://openweathermap.org/img/wn/10d@2x.png">
                            <p id="card-temp-1"></p>
                            <p id="card-humid-1"></p>
                            </div>
                        </div>
                        
                        <!-- Card 2 -->
                        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;" id="card-2">
                            <div class="card-header" id="card-header-2">Date</div>
                            <div>
                                <img id="card-icon-2" src="http://openweathermap.org/img/wn/10d@2x.png">
                                <p id="card-temp-2"></p>
                                <p id="card-humid-2"></p>
                            </div>
                        </div>
                        
                        <!-- Card 3 -->
                        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;" id="card-3">
                            <div class="card-header" id="card-header-3">Date</div>
                            <div>
                                <img id="card-icon-3" src="http://openweathermap.org/img/wn/10d@2x.png">
                                <p id="card-temp-3"></p>
                                <p id="card-humid-3"></p>
                            </div>
                        </div>

                        <!-- Card 4 -->
                        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;" id="card-4">
                            <div class="card-header" id="card-header-4">Date</div>
                            <div>
                                <img id="card-icon-4" src="http://openweathermap.org/img/wn/10d@2x.png">
                                <p id="card-temp-4"></p>
                                <p id="card-humid-4"></p>
                            </div>
                        </div>

                        <!-- Card 5 -->
                        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;" id="card-5">
                            <div class="card-header" id="card-header-5">Date</div>
                            <div>
                                <img id="card-icon-5" src="http://openweathermap.org/img/wn/10d@2x.png">
                                <p id="card-temp-5"></p>
                                <p id="card-humid-5"></p>
                            </div>
                        </div>


                    </div>

                    
                    
                    
                    


                </section>
            </div>
        </main>
    </div>
    