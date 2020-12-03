import {ISODateString} from "@capacitor/core";

export type ISODate = ISODateString;

export interface BaseEntity {
    id: number,
    createdAt: ISODate,
    updatedAt: ISODate,
}