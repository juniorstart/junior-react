export interface CreateRecruitmentFormData {
  companyName: string;
  city: string;
  workPlace: string;
  dateOfCompanyReply: Date;
  applicationDate: Date;
  companyReply?: boolean;
  notes: string;
  linkToApplication: string;
}
