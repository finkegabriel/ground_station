import ephem
import datetime

name = "NOAA 17";
line1 = "1 27453U 02032A   20117.76856472  .00000011  00000-0  23213-4 0  9991";
line2 = "2 27453  98.5799  65.4278 0012367  32.9042 327.2905 14.25064027927547";

tle_rec = ephem.readtle(name, line1, line2);
tle_rec.compute();

print(tle_rec.sublong, tle_rec.sublat);