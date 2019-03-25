Read to use !

**Flags

Full support is available for this feature in the latest version of Microsoft’s Edge browser, however I have an Android phone and wanted to test this using Chrome browser instead. If you open a new browser tab on your phone and head over to chrome://flags/, scroll till you come across “Generic Sensor Extra Classes” and enable this flag. Now that this has been enabled, your browser will be able to read the ambient light using it’s built in sensor.

You can either run this with yarn start or npm start!
**Also ! this will only work with a https server!

To do that the simplest way I've found is to run this command inside powershell on windows ($env:HTTPS = "true") -and (npm start)
