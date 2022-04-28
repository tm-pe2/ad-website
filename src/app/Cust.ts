export class Cust {
  name: string;
  custID: number;
  empID: number;
  addr: string;
  currentDate: Date;
  nextDate: Date;
  status: string;
  meterType: number; // 0 = elek // 1 = gas // 2 = both
  gMeterID : number;
  eMeterID : number;
  lastMetingG : number;
  lastMetingE : number;
  newMetingG : number;
  newMetingE : number;
  constructor(cid: number, eid: number) {
    this.custID = cid; // done
    this.empID = eid; // done
    this.name = "Name Customer " + cid; // done
    this.addr = "Addr of customer " + cid; // done
    this.currentDate = new Date('01/01/2020'); // done
    this.nextDate = new Date('01/01/2020'); // use post to add this
    this.status = "not done"; // done
    this.meterType = 2; // done
    this.gMeterID = 0;
    this.eMeterID = 0;
    this.lastMetingG = 0;
    this.lastMetingE = 0;
    this.newMetingG = 0;
    this.newMetingE = 0;
  }

  getName(): string {
    return this.name;
  }
  getID(): number {
    return this.custID;
  }
  getAdr(): string {
    return this.addr;
  }
  getStatus(): string {
    return this.status;
  }
  getMeterType(): number {
    return this.meterType;
  }
}
