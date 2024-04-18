import YolpApiClient from "../client";
import { KeywordSearchCommand } from "../types/commands";

const client = new YolpApiClient();

const command: KeywordSearchCommand = {
    appId: "hogehoge",
    device: "mobile",
    output: "json",
    lat: 35.689487,
    lon: 139.691711,
    query: "ramen",
};

client.get(command).then((response) => {
    console.log(response);
});
