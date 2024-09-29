import { action } from "../utils/const";
import { GenericMessage } from "@cs-magic/common/message";

export type Message = GenericMessage[typeof action];
