import {BaseEntity} from "./Base";
import {Service} from "./Service";
import {Availability} from "./Availability";

export interface Provider extends BaseEntity {
    firstName: string,
    lastName: string,
    phoneNumber?: string,
    email?: string,
}

export interface ProviderWithServices extends Provider {
    services: Array<Service>,
}

export interface ProviderWithAvailabilities extends Provider {
    availabilities: Array<Availability>,
}