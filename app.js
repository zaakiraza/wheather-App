async function data() {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5ac50daaba3b4c0b8a6205412250402&q=${input.value}&aqi=yes`);
    const feed= await response.json();
    const {location,current} = feed;
    console.log(current);
    if(document.querySelector('table')){
      document.querySelector('table').remove();
    }
    document.body.innerHTML+=`
    <table>
      <tr>
        <td>Location</td>
        <td>${location?.name || "Data Not Avaliable"}, ${location?.region || "Data Not Avaliable"}, ${location?.country || "Data Not Avaliable"}</td>
      </tr>
      <tr>
        <td>Latitude</td>
        <td>${location?.lat || "Data Not Avaliable"}</td>
      </tr>
      <tr>
        <td>Longitude</td>
        <td>${location?.lon || "Data Not Avaliable"}</td>
      </tr>
      <tr>
        <td>Current Temperature (Celcius)</td>
        <td>${current?.temp_c || "Data Not Avaliable"}</td>
      </tr>
      <tr>
        <td>Current Temperature (Farhenheit)</td>
        <td>${current?.temp_f || "Data Not Avaliable"}</td>
      </tr>
      <tr>
        <td>Wind Degree</td>
        <td>${current?.wind_degree || "Data Not Avaliable"}</td>
      </tr>
      <tr>
        <td>Wind Direction</td>
        <td>${current?.wind_dir || "Data Not Avaliable"}</td>
      </tr>
      <tr>
        <td>Local Time</td>
        <td>${location?.localtime || "Data Not Avaliable"}</td>
      </tr>
      <tr>
        <td>Pressure</td>
        <td>${current?.pressure_in || "Data Not Avaliable"}</td>
      </tr>
      <tr>
        <td>Humidity</td>
        <td>${current?.humidity || "Data Not Avaliable"}</td>
      </tr>
      <tr>
        <td>Cloud</td>
        <td id="image_cloud"><img src="https:${current?.condition?.icon || 'Data Not Avaliable'}" alt="Wheather Image">${current?.cloud || "Data Not Avaliable"}</td>
      </tr>
    </table>`
  } catch (error) {
    console.log(console.error(error));
  }
}