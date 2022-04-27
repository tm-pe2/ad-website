export class Cust {
  name: string;
  custID: number;
  empID: number;
  addr: string;
  currentDate: Date;
  nextDate: Date;
  status: string;
  meterType: number; // 0 = elek // 1 = gas // 2 = both 
  lastMeting : number;
  constructor(cid: number, eid: number) {
    // comments zijn als marker voor de API stuff in worker-app.service.ts
    this.custID = cid; // done
    this.empID = eid; // done
    this.name = "Name Customer " + cid; // done
    this.addr = "Addr of customer " + cid; // done
    this.currentDate = new Date("2404/04/04"); // done
    this.nextDate = new Date("2303/03/03"); // use post to add this
    this.status = "not done"; // done
    this.meterType = 2; // done
    this.lastMeting = 404;
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
