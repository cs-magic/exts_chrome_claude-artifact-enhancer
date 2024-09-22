import { action } from "src/utils/const";
import { GenericMessage } from "@cs-magic/common/dist/message";

export type Message = GenericMessage[typeof action];
