# SpraDHD

This project, SpraDHD, was developed during the March 2023 Duke Ignite Hackathon hosted by [Duke Ignite](https://dukeignite.com/).

## Synopsis

Do you find it challenging to stay focused on your work tasks while distractions like social media apps are just a click away on your smartphone? SpraDHD is here to help you maintain concentration by using gaze detection technology to detect when your visual attention shifts from your computer to external stimuli.

## Libraries

SpraDHD utilizes the open-source JavaScript library [WebGazer](https://github.com/brownhci/WebGazer) for real-time iris tracking and model calibration. WebGazer helps determine if the user's vision is within the bounding box of the computer screen.

## Functionality

The core functionality involves using WebGazer for gaze detection. If the user's gaze moves outside the specified bounding box (representing the computer screen), SpraDHD sends a **GET** request to the IP address of an ESP32 Arduino. Upon receiving the HTTP request, the Arduino triggers a motor connected to a spray bottle.


## Usage

1. Make sure your webcam is enabled.
2. Run the application in a controlled environment.
3. Keep your gaze within the computer screen area to avoid distractions.
4. Experience the spray mechanism if your focus drifts away.

## Acknowledgments

- [Duke Ignite](https://dukeignite.com/) for hosting the hackathon.
- [WebGazer](https://github.com/brownhci/WebGazer) for the gaze detection library.
