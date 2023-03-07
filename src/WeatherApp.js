import { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";


export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "7ed69b7f469d45e9c9f3d93e66c07857";

  const getWeather = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    setWeather(response.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather();
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Col md={6}>
          <h1 className="text-center mb-4 fs-2">
            <i className="bi bi-cloud-sun"></i> The Weather
          </h1>
          <div className="card-block">
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control type="text" placeholder="Enter a city" value={city} onChange={(event) => setCity(event.target.value)} />
              </Form.Group>
            </Form>
            {weather && (
              <div className="weather-card">
                <h2>{weather.name}</h2>
                <h4>{new Date().toLocaleString() + ""}</h4>
                <p>
                  Temperature: <span>{weather.main.temp}°C</span>{" "}
                </p>
                <p>
                  Description: <span>{weather.weather[0].description}</span>
                </p>
                <p>
                  Humidity: <span>{weather.main.humidity}%</span>
                </p>
                <p>
                  Wind Speed: <span>{weather.wind.speed}km</span>
                </p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
