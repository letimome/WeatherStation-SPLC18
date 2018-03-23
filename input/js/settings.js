
// PV:IFCOND(pv:hasFeature('Temperature'))
var minTemp = -30;
var maxTemp = 80;
var tempScale = '°C';
//PV:ENDCOND
//PV:IFCOND(pv:hasFeature('Heat'))
var tempLimit = 50;
//PV:ENDCOND

//PV:IFCOND(pv:hasFeature('AirPressure'))
var minPres = 910;
var maxPres = 1040;
var presScale = 'hPa';
//PV:ENDCOND

//PV:IFCOND(pv:hasFeature('WindSpeed'))
var minWind = 0;
var maxWind = 160;
var windScale = 'km/h';
//PV:ENDCOND
//PV:IFCOND(pv:hasFeature('Gale'))
var windLimit = 70;
//PV:ENDCOND

// PV:IFCOND(pv:hasFeature('English'))
var mainTitle = 'Weather Station Copenhangen';
var tempTitle = 'Temperature';
var presTitle = 'Air Pressure';
var tempWarning = 'Extrem Heat';
var windTitle = 'Wind Speed';
var windWarning = 'Storm Warning';
// PV:ENDCOND
// PV:IFCOND(pv:hasFeature('German'))
var mainTitle = 'Wetterstation';
var tempTitle = 'Temperatur';
var presTitle = 'Luftdruck';
var tempWarning = 'Extreme Hitze';
var windTitle = 'Windgeschwindigkeit';
var windWarning = 'Sturmwarnung';
// PV:ENDCOND