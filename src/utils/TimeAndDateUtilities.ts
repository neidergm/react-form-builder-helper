import { RegisterOptions } from "react-hook-form";

type TimeTypes = "day" | "days" | "month" | "months" | "year" | "years"

const timeGenerator = (min: string | number = "00:00", max: string | number = "24:00", step = 15) => {
    if (typeof min === "number") min = String(min)
    if (typeof max === "number") max = String(max)

    const [minH, minMin] = (min).split(":");
    const [maxH, maxMin] = (max).split(":");
    const divider = 60 / step;
    const firstH = Number(minH), lastH = Number(maxH);

    const l = Array((lastH + 1) * divider)
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

    if (l[l.length - 1] === "24:00") l.pop()
    return l;
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

// const minOrMaxTimeSetter = (val: RegisterOptions["min"]) => {

//     const obj = typeof val === "object" ? val : { value: val }

//     const value = obj.value as string;

//     const [hours, mins = 0, secs = 0] = value.split(":");

//     obj.value = new Date().setHours(Number(hours), Number(mins), Number(secs));

//     return obj;
// }

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
