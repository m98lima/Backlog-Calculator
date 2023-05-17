# Backlog Estimator

Use this project to keep track of your gaming backlog and how much time you're expected to put into playing all of it.

## How to use it

### On the web

You can follow [this link](https://backlog-estimator.vercel.app/) and test it for yourself.

### Local instance

If you want to set it up on your own machine, go into the `backlog-estimator` folder and run `yarn` on a console to install the project's dependencies.

After that, simply run `yarn dev` on the same console and folder and access `localhost:3000` on your web browser.

## Under the hood

This project was created using React and Next.js.

The data used to estimate playtimes is fetched from [HowLongToBeat](https://howlongtobeat.com/) through [this API](https://github.com/ckatzorke/howlongtobeat).

Your personal game list is stored on the web browser's local storage, so your backlog will persist if you close the web page or local application and come back to it later, as long as you use the same browser and access method (the backlog you've built on "backlog-estimator.vercel.app" will not exist on "localhost:3000" and vice-versa).
