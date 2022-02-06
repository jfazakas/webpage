import React from "react";

const Header = () => {
  return (
    <div className="content-wrap body">
      <h2 className="h2">Licensed Amateur Radio Operator</h2>
      <p className="indent">
        I've been into radio-electronics since I was 12 and I am a licensed
        QRP&nbsp;
        <a
          href="http://en.wikipedia.org/wiki/Amateur_radio_operator"
          target="blank"
        >
          Ham Radio Operator
        </a>
        &nbsp; since 1999. My favorite mode is&nbsp;
        <a href="http://en.wikipedia.org/wiki/Continuous_wave" target="blank">
          CW
        </a>
        . &nbsp;Today everybody wants to stay healthy, natural, organic, bio,
        so, be aware, Charley Whiskey might be your way to enlightenment. Also,
        if you want to save the Earth ;-) don't forget to smile and use low
        power.
      </p>
      <p className="indent">
        I am a member of the{" "}
        <a href="http://naqcc.info/" target="blank">
          North American QRP CW Club
        </a>
        . As their website states, NAQCC supports the use, preservation and
        education of Morse code and emphasize using QRP power with simple wire
        antennas..
      </p>
      <p className="indent">
        I prefer operating modes which, by their nature, limit any trash talking
        and make the operator stick to the basic amateur radio related
        informations: report, rig setup, power, antenna, location, weather
        conditions, propagation and meaningful technical details. In a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Contact_(amateur_radio)"
          target="blank"
        >
          QSO
        </a>{" "}
        I am interested about the operating conditions and details, I am short
        and stick to the point, do not expect ragchewing with me.
      </p>
    </div>
  );
};

export default Header;
