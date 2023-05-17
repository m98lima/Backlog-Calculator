const hltb = require("howlongtobeat");
const hltbService = new hltb.HowLongToBeatService();

export default async function handler(req, res) {
  const gameTitle = req.query.q;
  const response = await hltbService.search(gameTitle);
  if (response.status === 200) {
    res.send({ gameInfo: response });
  } else {
    res.send({ response });
  }
};
