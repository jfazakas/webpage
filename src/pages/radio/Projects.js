import React from "react";
import id51Img from "./images/id51.jpeg";
import ic7300Img from "./images/ic7300Img.jpg";
import antennaImg from "./images/antenna.jpg";
import iotImg from "./images/dstar.jpg";

const Projects = () => {
  return (
    <section className="projects">
      <div className="content-wrap item-details divider">
        <h2>YO6GZI</h2>

        <section className="project-item">
          <img className="img" src={id51Img} alt="VHF/UHF" />
          <h3>VHF/UHF Bands</h3>
          <ul>
            <li>
              Icom ID-51E and ID-51E Plus: 2m/70cm Digital Voice, D-Star and
              regular modes with extended frequency range (see mod{" "}
              <a href="#">here</a>)
            </li>
            <li>Motorola Radius GP300 2m/emergency monitoring</li>
            <li>
              Baofeng UV3: 2m/70cm SDR TRX used also as a APRS I-Gate. Hooked to
              a J-pole antenna covers aprox. a 35km radius area.
            </li>
          </ul>
        </section>

        <section className="project-item">
          <img className="img" src={ic7300Img} alt="HF" />
          <h3>HF Bands</h3>
          <ul>
            <li>Icom IC7300 SDR HF/50 MHz Transceiver</li>
            <li>SDR DX-Patrol MK4 Ultra wide-band receiver</li>
          </ul>
        </section>

        <section className="project-item">
          <img className="img" src={antennaImg} alt="ANT" />
          <h3>Antennas</h3>
          <ul>
            <li>Telescopic (portable) dipole for 2m/70cm band </li>
            <li>Ground Plane for 2m band, built on a magnetic base</li>
            <li>
              5/8 lambda J-pole 2m/70cm portable three element Yagi for 2m band
            </li>
            <li>Portable four element Yagi for 70cm band </li>
            <li>Inverted V for 40m and 20m band Dipole for 40m band</li>
            <li>EH antenna for 20m band Magnetic loop for 10m band</li>
            <li>
              Slim Jim for 2m/70cm band 145.800 MHz 3 element Yagi for Satellite
              operation
            </li>
          </ul>
          <p>
            <em>
              All antennas are built by myself. Since I do not have much free
              time to dive into circuit building, I enjoy antenna building and
              testing.
            </em>
          </p>
        </section>

        <section className="project-item">
          <img className="img" src={iotImg} alt="IoT" />
          <h3>IoT</h3>
          <ul>
            <li>
              Raspberry Pi 2 server, 75% uptime, running an APRS iGate with a
              DigiPeater on 144.800 MHz, a DX Cluster, and a DV-Mega shield with
              the pi-star software to have a 10mW D-Star Hot Spot accessible on
              438.9125 MHz.
            </li>
            <li>
              Raspberry Pi 3, portable D-star HotSpot with a DV-Mega shield,
              running a pi-star image. It is set up to connect to my android
              mobile's WiFi hotspot and can be accessed on 438.915 MHz. A
              perfect setup to be used in the car, when out camping or anywhere
              on holidays. All gear is plugged into a 10500mAh rechargeable
              battery.
            </li>
            <li>
              Raspberry Pi Zero W based weather station with AM2320
              temperature/humidity sensor and BMP180
              temperature/pressure/altitude sensor.
            </li>
            <li>
              XLX Multiprotocol Gateway Reflector hosted in the cloud on a VPS
              with an Ubuntu 16.04 instance.
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Projects;
