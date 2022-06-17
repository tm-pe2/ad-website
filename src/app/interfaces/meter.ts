export interface Meter{
    id: number,
    meter_type: MeterType,
    physical_id: number,
    value: number,
}

export enum MeterType {
    MANUAL = "Manual",
    SMART = "Smart",
}