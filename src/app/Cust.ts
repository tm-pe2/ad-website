export class Cust {
  name: string;
  custID: number;
  empID: number;
  addr: string;
  currentDate: Date;
  nextDate: Date;
  status: string;
  meterType: number; // 0 = elek // 1 = gas // 2 = both 
  lastMetingG : number;
  lastMetingE : number;
  newMetingG : number;
  newMetingE : number;
  constructor(eid: number) {
    this.custID = 0; // from planning stuff
    this.empID = eid; // Via login
    this.name = "Name Customer "; // via customer table
    this.addr = "Addr of customer "; // via adresID in customer table
    this.currentDate = new Date('01/01/2020'); // date.today()
    this.nextDate = new Date('01/01/2020'); // use post to add this
    this.status = "not done"; // planning status
    this.meterType = 2; // still needed?
    this.lastMetingG = 0; // Where to get this
    this.lastMetingE = 0; // Where to get this
    this.newMetingG = 0; // Where to put this
    this.newMetingE = 0; // Where to put this
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

  // Set functions
  setCid(variable: number) { this.custID = variable; }
  setName(variable: string) { this.name = variable; }
  setAddress(variable: string) { this.addr = variable; }
  setCurrentDate(variable: Date) { this.currentDate = variable; }
  setNextDate(variable: Date) { this.nextDate = variable; }
  setStatus(variable: string) { this.status = variable; }
  setType(variable: number) { this.meterType = variable; }
  setLastG(variable: number) { this.lastMetingG = variable; }
  setLastE(variable: number) { this.lastMetingE = variable; } 
}
