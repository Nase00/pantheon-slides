import React from "react";
import CodeSlide from "spectacle-code-slide";
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";
import createTheme from "spectacle/lib/themes/default";

import spaghettiBath from "../assets/spaghetti-bath.jpg";
import pantheonPre from "../assets/pantheon-pre.png";
import pantheonPost from "../assets/pantheon-post.png";

require("normalize.css");
require("../assets/monokai.css");
require("./styles.css")

const theme = createTheme(
  {
    primary: "#1F2022",
    secondary: "white",
    tertiary: "#05a8fa",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Pantheon
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Universal IoT Integration
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Some Common Communication Protocols
          </Heading>
          <List>
            <ListItem>WiFi</ListItem>
            <ListItem>Bluetooth</ListItem>
            <ListItem>WebSocket</ListItem>
            <ListItem>ZigBee</ListItem>
            <ListItem>HTTP (Hyper Text Transfer Protocol)</ListItem>
            <ListItem>MQTT (Message Queuing Telemetry Transport)</ListItem>
            <ListItem>AMQP (Advanced Message Queueing Protocol</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Direct connections between devices and services
          </Heading>
          <img src={pantheonPre} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Feels like
          </Heading>
          <img src={spaghettiBath} style={{ borderRadius: "60px" }} />
          <Text size={2} textColor="secondary" style={{ fontSize: "8px" }}>
            (credit: Google Images)
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            A saner method
          </Heading>
          <img src={pantheonPost} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Service integrations
          </Heading>
          <List>
            <ListItem>Spotify OAuth</ListItem>
            <ListItem>Philips HUE</ListItem>
            <ListItem>Unified Remote</ListItem>
            <ListItem>Particle Cloud</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="json"
          code={require("raw-loader!../assets/event.example")}
          showLineNumbers={false}
          ranges={[
            { loc: [0, 15], title: "Example event sequence" },
            { loc: [1, 2], note: "Flash green desk light" },
            { loc: [2, 6], note: "Unlock gate" },
            { loc: [7, 14], note: "Queue up song upon opening door" }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="json"
          code={require("raw-loader!../assets/config.example")}
          showLineNumbers={false}
          ranges={[
            { loc: [0, 191], title: "Tenant configuration" },
            { loc: [2, 10], note: "Restrict guest access" },
            { loc: [27, 39], note: "Set custom state" }
          ]}
        />
      </Deck>
    );
  }
}
