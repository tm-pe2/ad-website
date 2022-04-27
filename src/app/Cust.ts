export class Cust {
  name: string;
  custID: number;
  empID: number;
  addr: string;
  currentDate: Date;
  nextDate: Date;
  status: string;
  meterType: number; // 0 = elek // 1 = gas // 2 = both 

  constructor(cid: number, eid: number) {
    this.custID = cid;
    this.empID = eid;
    this.name = "Name Customer " + cid;
    this.addr = "Addr of customer " + cid;
    this.currentDate = new Date("2404/04/04");
    this.nextDate = new Date("2303/03/03");
    this.status = "not done";
    this.meterType = 2;
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
