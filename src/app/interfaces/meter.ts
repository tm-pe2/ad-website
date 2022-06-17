import { MeterType } from "./customer";

export interface Meter{
    id: number,
    meter_type: MeterType,
    physical_id: number,
    index_value: number,
}