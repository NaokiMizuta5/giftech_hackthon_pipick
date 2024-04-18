import { IYolpApiClient } from "../../yolp/client";
import { IYolpCommandFactory } from "../../yolp/factory/command";
import { ICollector } from "../common/interfaces/collector";
import { IConvertor } from "../common/interfaces/convertor";

import { Suggestion } from "../common/types/suggestion";
import { Location } from "../../yolp/types/location";

class RestaurantCollector implements ICollector {

    private readonly location: Location;

    private readonly client: IYolpApiClient;
    private readonly factory: IYolpCommandFactory;
    private readonly converter: IConvertor;
    private readonly genreIds = {
        // TODO: set correct genreIds
        // incorrect genreIds are set now @see https://developer.yahoo.co.jp/webapi/map/
        italian: "G001",
        french: "G002",
        ramen: "G004",
        curry: "G005",
        sushi: "G006",
    };

    constructor(
        location: Location,
        client: IYolpApiClient,
        factory: IYolpCommandFactory,
        converter: IConvertor,
    ) {
        this.client = client;
        this.location = location;
        this.factory = factory;
        this.converter = converter;
    }



    async collect(): Promise<any> {
        // TODO: chose what type of restaurant to fetchByGenre
        const italianCandidates = this.fetchByGenre(this.genreIds.italian);
        const frenchCandidates = this.fetchByGenre(this.genreIds.french);
        const ramenCandidates = this.fetchByGenre(this.genreIds.ramen);
        const curryCandidates = this.fetchByGenre(this.genreIds.curry);
        const sushiCandidates = this.fetchByGenre(this.genreIds.sushi);

        const candidates = await Promise.all([
            italianCandidates,
            frenchCandidates,
            ramenCandidates,
            curryCandidates,
            sushiCandidates,
        ])
        candidates.flat();

        return candidates;

    }

    private async fetchByGenre(gid: string): Promise<Suggestion[]> {
        const command = this.factory.createGenreSearchCommand(gid, this.location);
        const response = await this.client.get(command);
        const suggestions = this.converter.toSuggestion(response);
        return suggestions;
    }
}

export default RestaurantCollector;
