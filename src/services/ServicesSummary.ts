import {ProviderWithAvailabilities} from "../entities/Provider";
import {Service} from "../entities/Service";

export interface ServiceWithProviderAvailabilities extends Service {
    providers: Array<ProviderWithAvailabilities>,
}

export default interface ServicesSummary {
    getAvailableServices: () => Promise<Array<ServiceWithProviderAvailabilities>>,
}