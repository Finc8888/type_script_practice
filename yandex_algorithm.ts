export type TParamValue = string | string[];
export type TParams = Record<string, TParamValue>;
/*
/   Путь вида action?param=&param=1;2;3&param=8,
    преобразуется в массив "param" : ["1", "2", "3", "8"]
 */
export function normalizeParams(params: TParams): TParams {
    const result:any = {} ;

    for (const [paramName, paramValue] of Object.entries(params)) {
        // массив может быть при наличии двух одинаковых query-параметров
        if (Array.isArray(paramValue)) {
            result[paramName] = paramValue.reduce((acc, part) => {
                if (part) {
                    acc = acc.concat(part.split(';').filter(Boolean));
                }

                return acc;
            }, []);
        } else if (paramValue) {
            result[paramName] = paramValue.split(';').filter(Boolean);
        }
    }

    return result;
}
