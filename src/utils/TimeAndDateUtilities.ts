import { RegisterOptions } from "react-hook-form";

type TimeTypes = "day" | "days" | "month" | "months" | "year" | "years"

const timeGenerator = (min = "00:00", max = "24:00", step = 5) => {
    const [minH, minMin] = (min).split(":");
    const [maxH, maxMin] = (max).split(":");
    const divider = 60 / step;
    const firstH = Number(minH), lastH = Number(maxH);

    return Array((lastH + 1) * divider)
        .fill(0).reduce((p, _, i) => {
            const hh = ~~(i / divider);
            const mm = Math.round(60 * (i / divider % 1));
            if (hh >= firstH) {
                if (
                    (firstH === hh && mm < Number(minMin)) || (lastH === hh && mm > Number(maxMin))
                ) return p;
                return [...p, ('0' + hh + ':0' + mm).replace(/\d(\d\d)/g, '$1')];
            }
            return p;
        }, [])
}

const minOrMaxDateSetter = (val: RegisterOptions["min"]) => {

    const obj = typeof val === "object" ? val : { value: val }

    const min = obj.value as string;

    if (min === "today") {
        obj.value = dateSetter(0);
    } else if (/(next|last)\s\d{1,}\s(day|month|year)s?/.test(min)) {
        const [tymetye, num, temp] = min.split(" ");
        obj.value = dateSetter(Number(num) * (tymetye === "last" ? -1 : 1), temp as TimeTypes);
    }
    return obj;
}
// const maxDateSetter = (max: string) => {
//     if (max === "today") {
//         return dateSetter(0);
//     } else if (/(next|last)\s\d{1,}\s(day|month|year)s?/.test(max)) {
//         const [, num, temp] = max.split(" ");
//         return dateSetter(Number(num), temp as TimeTypes);
//     }
//     return "";
// }

const dateSetter = (value: number, type?: TimeTypes) => {
    const date = new window.Date();
    let d: Date | string = "";
    if (/days?/.test(type!)) {
        d = new window.Date(date.getFullYear(), date.getMonth(), date.getDate() + value);
    } else if (/months?/.test(type!)) {
        d = new window.Date(date.getFullYear(), date.getMonth() + value, date.getDate());
    } else if (/years?/.test(type!)) {
        d = new window.Date(date.getFullYear() + value, date.getMonth(), date.getDate());
    } else {
        d = new window.Date();
    }
    d = d.toLocaleString([], { day: "2-digit", month: "2-digit", year: "numeric" });
    return d.split("/").reverse().join("-");
}

export {
    timeGenerator,
    minOrMaxDateSetter
};
