import { WithChildren } from "../interfaces/fields.interface"
import { I_JsonObject } from "../interfaces/generic.interfaces";

const fieldWatcher = (dependsOn: WithChildren["dependsOn"], values: Array<unknown>) => {

  const idx = 0;
  const val = values[idx]

  if (typeof dependsOn !== "string") {
    const data: I_JsonObject = {};
    data.parentValue = { [dependsOn[idx].name]: val };

    if (!val) {
      data.show = !dependsOn[idx].show
    } else {
      if (dependsOn[idx].whenValue !== "*") {
        if (dependsOn[idx].show) {
          data.show = val === dependsOn[idx].whenValue
        } else {
          data.show = val !== dependsOn[idx].whenValue
        }
      }
    }
    return data;
  }

  return {
    show: true,
    parentValue: { [dependsOn]: val }
  };
}

export default fieldWatcher;
