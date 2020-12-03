import {BaseEntity, ISODate} from "./Base";

export interface Availability extends BaseEntity {
    time: ISODate,
}