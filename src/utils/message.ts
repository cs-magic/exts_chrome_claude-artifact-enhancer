import { action } from "./const";

export interface Message {
  type: action;
  data: any;
}