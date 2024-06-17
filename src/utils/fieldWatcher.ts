import { WithChildren } from "../interfaces/fields.interface"
import { I_JsonObject } from "../interfaces/generic.interfaces";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const valueIsEqual = (val: any, whenValue: any):boolean => {
  if (typeof val === "object") {
    if (typeof whenValue !== "object") return val?.includes(whenValue)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return val.some((str: any) => whenValue.includes(str));

  } else if (typeof whenValue === "object") {
    return whenValue.includes(val)
  }

  return val === whenValue
}

const fieldWatcher = (dependsOn: WithChildren["dependsOn"], values: Array<unknown>) => {

  if (typeof dependsOn === "string") dependsOn = [{ name: dependsOn }]

  const data: I_JsonObject = {};
  const shouldShow: boolean[] = [];

  dependsOn.forEach((dep, idx) => {
    const val = values[idx];
    const hasValue = !["", undefined, null].includes(val as string);

    data.parentValue = { ...data.parentValue, [dep.name]: val };
    let isShow = true;

    if (!("whenValue" in dep) && !("show" in dep)) {
      shouldShow.push(isShow);
    } else {
      let { show, whenValue } = dep;

      if (typeof show !== "boolean") show = true;
      else if (!("whenValue" in dep)) whenValue = "*";

      const equal = valueIsEqual(val, whenValue);

      if (whenValue !== "*") {
        isShow = show ? equal : !equal
      } else {
        isShow = show ? hasValue : !hasValue
      }

      if ("props" in dep) {
        if (isShow) data.props = { ...(data.props || {}), ...dep.props }
        else if (!("show" in dep)) isShow = true
      }

      shouldShow.push(isShow);
    }
  })

  data.show = shouldShow.every(s => s)
  return data;
}

export default fieldWatcher;
