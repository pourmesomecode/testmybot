# TestMyBot Sample: Wiring TestMyBot with Botkit

This is an example for using TestMyBot without a Docker container. The testing code is wires Botkit with TestMyBot and Jasmine.

## The TestMyBot Configuration

In the TestMyBot configuration file (testmybot.json), the container mode is set to "local" ( = no container used)

	{
		"containermode": "local"
	}

## Setting up TestMyBot

The jasmine.js file wires Botkit with TestMyBot and Jasmine, by hooking into some internal functions. This is Quick&Dirty, but it works :-)

You can run it by simply running the jasmine.js file:

    $ node jasmine.js






