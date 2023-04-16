export interface AssistanceNew{
  userId: string;
  userName: string;
  date: string;
  punchIn: string;
  punchOut: string;
}
export interface Assistance{
  id: string;
  userId: string;
  userName: string;
  date: string;
  punchIn: string;
  punchOut: string;
}

export interface AssistanceFilter{
  userName: string;
  minDate: string;
  maxDate: string;
}
