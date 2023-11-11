# ignite

This is my March 2023 Duke Ignite (dukeignite.com) Hackathon project SpraDHD.


## Synopsis

Have you ever struggled at paying attention to your work tasks on your laptop? With your smartphone right beside you and applications such as Tiktok and Instagram, remaining focused could be difficult.  

## Libraries

This software utilizes the open source Javascript library 'WebGazer' to track the human iris and calibrate our model in real time to detect when one's visual attention has shifted from their computer to external stimuli. 

For more information, visit the WebGazer library GitHub documentation - https://github.com/brownhci/WebGazer

## Functionality 

We utilize WebGazer for gaze detection to deterimine if one's vision is within the bounding box of our window, in this case, your computer screen. If your gaze is within the outer edges of the bounding box, we will send a **GET** request to the IP address of an ESP32 arduino. Once the HTTP request is received, it will trigger a motor connected to a spray bottle. 

