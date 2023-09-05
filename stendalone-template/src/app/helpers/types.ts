//אובייקט גדול
export interface Father{
  sectionA:SectionA;
  sectionB:SectionB;
  sectionC:SectionC;
}
//פרוט אבא סקשיין א
export interface SectionA{
  employeeDetails:EmployeeDetails;
  employerDetails:EmployerDetails;
  a3:A3;
  a4:A4;
  a5:A5[];
  a6:A6;
  a7:A7;
  a8:A8[];
  a9:A9[];
  a10:A10;
  a11:A11;
  a12:A12;
  a13:A13;
}
//פרוט נכדים סקשיין א
export interface EmployeeDetails{
  id:number;
  firstName:string;
  lastName:string;
  dateOfBirth:Date;
  address:Address;
  email?:string;
  phone:number;
  assessor?:string; // לשאול
  markingsInCellA1?:string; // לשאול
  originalFormOrCorrection:string; // לשאול
  date:Date;
}

export interface Address{
  street:string;
  country:string;
  postalCode?:number;
}

export interface EmployerDetails{
  deductionFileID:number;
  name:string;
  addres:string;
  email:string;
  phone:number;
}

export interface A3{
  cellsToChoose:string; // לשאול
}

export interface A4{
  dateFirst:Date;
  retirementDate:Date;
  workPeriod:number;
}

export interface A5{
  dateFirst?:Date;
  endDate?:Date;
  jobRate?:number;
  lastSalary?:number;
}

export interface A6{
  lastSalary:number;
  guaranteedSalary:number;
  compensationSalary:number;
}
export interface A7{
  notEntitledToPension?:boolean;
  entitledToPension?:boolean;
  date?:Date;
  salary?:number;
}
export interface A8{
  dateOfPayment:Date;
  sum:number;
}
export interface A9{
  payingName:string;
  deductionFileID:number;
  payCode:number;
  formOfPayment?:NameAndCode;// רשום בחירה מתוך רשימה לכן יצרתי אובייקט
  dateOfDepositOrPayment?:Date;
  lastDepositDate?:Date;
  amountForTheDayOfRetirement:number;
  additionalAccumulation?:number;
  total:number;
  totalA9:number;
}
export interface NameAndCode{
  sDesc:string;
  iCode:number;
}
export interface A10{
  theEmployeeIsCharged:boolean;
  PaymentDetails :PaymentDetails[]; 
  totalPaymentsCharged:number;
  totalPaymentsDebitedWithProfits:number;
}
export interface PaymentDetails{
  payingName:string;
  deductionFileID:number;
  chargedPayments:number;
  chargedPaymentsIncludingProfits:number;
}

export interface A11{
  PreRetirementPensionDetails?:PreRetirementPensionDetails[];
  totalA?:number;
  totalGrantAmount?:number;
}
export interface PreRetirementPensionDetails{
  payingName?:string;
  deductionFileID:number;
  payCode?:number;
  monthOfConversionToPension?:Date;
  allowanceAmount?:number;
  total?:number;
}
export interface A12{
  checkbox1:boolean;
  checkbox2:boolean;
}
export interface A13{
  TotalGrantAmount:number;
  AmountForAnnuitySequence:number;
  AmountForCompensationSequence:number;
  TheAmountOfTheExemptGrant:number;
  TheAmountOfTheTaxableGrant:number;
}

//פרוט אבא סקשיין ב
//לשאול לגבי השדות חובה כתוב : חובה למלא רק בתרחיש חלופה ב
export interface SectionB{
  b1:B1;
  b2:B2;
  b3:B3;
}

//פרוט נכדים סקשיין ב
export interface B1{
  deductionFileID:number;//לשאול
  TotalAmount:number;
  allowanceSequence?:number;
  compensationSequence:number;
  ExemptionGrant:number;
  grantRequired:number;
  //תאים בצבע אפור למעט סה"כ לא יודעת איך לקרוא לזה - לא יודעת אם זה בכלל מייצג אובייקט לא הצלחתי  להבין
  total:number;
}

export interface B2{
  checkbox1?:boolean;
  checkbox2?:boolean;
  sum:number;
  providentFundName:string;
  deductionFileID:number;
}
export interface B3{
  checkbox1?:boolean;
  checkbox2?:boolean;
  checkbox3?:boolean;
  workerName:string;
  date:Date;
  signature:string;
}
//פרוט אבא סקשיין ג
export interface SectionC{
  c1:C1;
  c2:C2;
  c3:C3;
}
//פרוט נכדים סקשיין ג
export interface C1{
  checkbox1?:boolean;//תרחיש חלופה א
  checkbox12?:boolean;//תרחיש חלופה א
  checkbox21?:boolean;//תרחיש חלופה ב
  checkbox22?:boolean;//תרחיש חלופה ב
  totalgrantAmount:number;
  amountForannuitySequence:number;
  amountForCompensationSequence:number
  theAmountOfTheExemptGrant:number;
  boxOfficeInstructions:number;
}
export interface C2{
  checkbox1?:boolean;
}
export interface C3{
  date:Date;
  fullName:string;
  role:string;
  signature:string;
  stamp:string;
}