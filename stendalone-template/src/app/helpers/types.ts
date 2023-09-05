//אובייקט גדול
export interface Father {
  sectionA: SectionA;
  sectionB: SectionB;
  sectionC: SectionC;
}
//פרוט אבא סקשיין א
export interface SectionA {
  employeeDetails: EmployeeDetails;
  employerDetails: EmployerDetails;
  endingCause: EndingCause;
  workPeriod: WorkPeriod;
  workStatusChanges: WorkStatusChange[];
  salary: Salary;
  budgetaryPension: BudgetaryPension;
  endingBonuses: EndingBonus[];
  workBonuses: WorkBonuses;
  employerDeposits: EmployerDeposit[];
  pensions: Pension[];
  overheadPension: OverheadPension;
  maxAllowedPayments: MaxAllowedPayments;
}
//פרוט נכדים סקשיין א
export interface EmployeeDetails {
  Id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  street: string;
  appartment: string;
  city: string;
  postalCode?: number;
  isHolder: boolean;
  isHolderRelative: boolean;
  relationType?: string; // לשאול
  phone: number;
  email?: string;
}

export interface EmployerDetails {
  deductionFileId: number;
  name: string;
  street: string;
  appartment: string;
  city: string;
  postalCode?: number;
  email: string;
  phone: number;
}

export enum EndingCauseEnum {
  Retirement = 1,
  Death = 2,
  Disability = 3,
}

export interface EndingCause {
  endingCause: EndingCauseEnum;
}

export interface WorkPeriod {
  startDate: Date;
  endDate: Date;
  workPeriod: number;
}

export interface WorkStatusChange {
  startDate?: Date;
  endDate?: Date;
  jobRate?: number;
  periodLastSalary?: number;
}

export interface Salary {
  lastSalary: number;
  guaranteedSalary: number;
  compensationSalary: number;
}
export interface BudgetaryPension {
  notEntitledToPension?: boolean;
  fromDate?: Date;
  baseSalary?: number;
}
export interface EndingBonus {
  paymentDate: Date;
  sum: number;
}
export interface WorkBonuses {
  workBonus: WorkBonus[];
  sum: number;
}
export interface WorkBonus {
  payerCode: number;
  payerName: string;
  paymentType: string;
  deductionFileId: number;
  firstDepositDate?: Date;
  paymentDate?: Date;
  lastDepositDate?: Date;
  retirementDateSum: number;
  additionalAccumulation?: number;
  total: number;
}
export interface NameAndCode {
  // paymentType?: NameAndCode; // רשום בחירה מתוך רשימה לכן יצרתי אובייקט
  sDesc: string;
  iCode: number;
}
export interface EmployerDeposit {
  employeeIncomeIsCharged: boolean;
  PaymentsDetails: PaymentDetails[];
  totalChargedPayments: number;
  totalDebitedPaymentsIncludingProfits: number;
}
export interface PaymentDetails {
  payerName: string;
  deductionFileId: number;
  chargedPayments: number;
  chargedPaymentsIncludingProfits: number;
}

export interface Pension {
  PensionsDetails?: PensionDetails[];
  PensionsTotal?: number;
  totalGrantAmount?: number;
}
export interface PensionDetails {
  payerCode?: number;
  payerName?: string;
  paymentType: string;
  deductionFileId: number;
  firstDepositDate?: Date;
  paymentDate?: Date;
  lastDepositDate?: Date;
  retirementDateSum: number;
  additionalAccumulation?: number;
  total: number;
}
export interface OverheadPension {
  overheadPension: boolean;
  otherPayers: boolean;
}
export interface MaxAllowedPayments {
  totalGrantAmount: number;
  amountForAnnuitySequence: number;
  amountForCompensationSequence: number;
  amountOfTheExemptGrant: number;
  amountOfTheTaxableGrant: number;
}

//פרוט אבא סקשיין ב
//לשאול לגבי השדות חובה כתוב : חובה למלא רק בתרחיש חלופה ב
export interface SectionB {
  employeeRequests: EmployeeRequests;
  additionalRequests: AdditionalRequests;
  employeeStatments: EmployeeStatments;
}

//פרוט נכדים סקשיין ב
export interface EmployeeRequests {
  employeeRequests: EmployeeRequest[];
  taxableGrant: Total;
  totalAmount: Total;
  sum: Sum;
}
export interface Total {
  TotalAmountSum: number;
  allowanceSequenceSum?: number;
}

export interface Sum {
  TotalAmount: number;
  allowanceSequence: number;
  compensationSequence?: number;
  ExemptionGrant?: number;
  grantRequired: number;
}
export interface EmployeeRequest {
  deductionFileId: number; //לשאול
  TotalAmount: number;
  allowanceSequence: number;
  compensationSequence?: number;
  ExemptionGrant?: number;
  grantRequired: number;
}

export interface AdditionalRequests {
  devideBonus: boolean;
  dedicateSum?: number;
  fundName: string;
  deductionFileId?: number;
}
export interface EmployeeStatments {
  employeeIsOnlyPayer: boolean; //default false
  singleRequest: boolean; //default false
  noDeclaredRetirment?: boolean; //default false
  emploeeName: string;
  date: Date;
  signature?: string;
}
//פרוט אבא סקשיין ג
export interface SectionC {
  sectionBSummary: SectionBSummary;
  instructions: Instructions;
  c3: C3;
}
//פרוט נכדים סקשיין ג
export interface SectionBSummary {
  noSectionB: boolean;
  employyeHasControlOrRelative: boolean; //default false
  employyeDeceased: boolean; //default false
  noTaxCharge: boolean; //default false
  requestsInLimits: boolean; //default false
  noAdditionalRequests: boolean; //default false
  DeclirationTerms: boolean; //default false

  totalGrantAmount: number;
  amountForAnnuitySequence: number;
  amountForCompensationSequence: number;
  amountOfExemptGrant: number;
  amountOfTaxableGrant: number;
  boxOfficeInstructions: number;
}
export interface Instructions {
  invalidTermsWithSectionB?: string[];
  invalidTermsWithoutSectionB?: string[];
}
export interface C3 {
  date: Date;
  fullName: string;
  role: string;
  signature?: string;
  stamp?: string;
}
