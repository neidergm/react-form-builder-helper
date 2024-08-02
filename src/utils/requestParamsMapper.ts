import { WithRequestConfig } from '../interfaces/fields.interface'
import { I_JsonObject } from '../interfaces/generic.interfaces';

const replaceParam = (text: string, values: I_JsonObject) => {
    return text.replace(/\{([\w]+)\}/g, (_, param) => {
        const val = values[param];
        return (val !== null && val !== undefined) ? val : _;
    })
}
const requestParamsMapper = (requestObjet: WithRequestConfig["request"], values: I_JsonObject) => {

    let { params, url } = requestObjet;
    let returnSameObject = !params;

    if (/(\?|=|\/){[a-z0-9_-]+}/i.test(url)) {
        url = replaceParam(url, values)
        returnSameObject = false
    }

    if (returnSameObject) return requestObjet;

    if (params) {
        if (typeof params === "string") {
            params = replaceParam(params, values)
        } else {
            params = Object.keys(params).reduce((p, c) => {
                if (p[c] === null) {
                    return { ...p, [c]: values[c] }
                }
                return p
            }, { ...params })
        }
    }

    return {
        ...requestObjet,
        url,
        params
    }
}

export default requestParamsMapper;
