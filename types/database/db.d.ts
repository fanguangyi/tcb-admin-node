import { Point } from "./geo/point";
import { CollectionReference } from "./collection";
import { Command } from "./command";
import { ServerDate } from "./serverDate";
interface GeoTeyp {
    Point: typeof Point;
}
export declare class Db {
    Geo: GeoTeyp;
    command: Command;
    config: any;
    constructor(config?: any);
    serverDate(offset?: number): ServerDate;
    collection(collName: string): CollectionReference;
}
export {};
