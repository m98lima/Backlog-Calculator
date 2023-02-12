# Backlog-Calculator
Use this project to keep track of your gaming backlog and how much time you're expected to put into playing all of it.


## How to use it
Go into the ```backlog-calculator``` folder and run ```yarn``` on a console to install the project's dependencies.

After that, simply run ```yarn dev``` on the same console and access ```localhost:3000``` on your web browser.

## Under the hood
This project was created using React and Next.js. 

The data used to estimate playtimes is fetched from [HowLongToBeat](https://howlongtobeat.com/) through [this API](https://github.com/ckatzorke/howlongtobeat).

The game list is stored on the web browser's local storage, so your backlog will persist if you close the application and run it again later, 
just as long as you use the same browser
