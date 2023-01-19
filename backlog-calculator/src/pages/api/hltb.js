const hltb = require("howlongtobeat");
const hltbService = new hltb.HowLongToBeatService();

export default async function handler(req, res) {
  console.log('hltbService');
  const gameTitle = req.query.q;
  const response = await hltbService.search(gameTitle);
  console.log(response);
  if (response.status === 200) {
    res.send({ gameInfo: response });
  } else {
    res.send({ response });
  }
};
