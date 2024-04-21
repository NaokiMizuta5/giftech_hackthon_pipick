import YolpApiClient from "../client";
import YolpCommandFactory from "../factory/command";

const client = new YolpApiClient();
const factory = new YolpCommandFactory();
const location = { lat: 35.681236, lon: 139.767125 };
const command = factory.createGenreSearchCommand("01", location);
client.get(command).then((response) => {
  const _amount = response.Feature.length;
});
