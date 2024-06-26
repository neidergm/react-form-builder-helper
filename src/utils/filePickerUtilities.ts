import { ValidationValueMessage } from "react-hook-form";
import { FileConfig } from "../interfaces/fields.interface";

export const validationsForFiles = (files: FileList, validations: FileConfig["validations"]) => {
    if (!validations) return true;

    if ("maxFileSize" in validations) {
        const { value, message } = validations.maxFileSize as ValidationValueMessage<number>;
        if (files?.length > 0) {
            for (let i = 0; i < files.length; i++)
                if ((((files[i].size) / 1024) / 1024) > value) return message;
        }
    }
    if ("minFileSize" in validations) {
        const { value, message } = validations.minFileSize as ValidationValueMessage<number>;
        if (files?.length > 0) {
            for (let i = 0; i < files.length; i++)
                if ((((files[i].size) / 1024) / 1024) < value) return message;
        }
    }
    if ("min" in validations) {
        const { value, message } = validations.min as ValidationValueMessage<number>;
        if (value > files.length) return message;
    }
    if ("max" in validations) {
        const { value, message } = validations.max as ValidationValueMessage<number>;
        if (value < files.length) return message;
    }
    if ("accept" in validations) {
        const { value, message } = validations.accept as ValidationValueMessage<string>;
        const accept = value.split(",").map((i: string) => i.trim());
        for (let i = 0; i < files.length; i++) {
            const vs = files[i].name?.split(".");
            if (!accept.includes(`.${vs.pop()}`)) return message;
        }
    }

    return true
}
