import { Control, useWatch } from 'react-hook-form'
import fieldWatcher from '../utils/fieldWatcher';
import { WithDepends } from '../interfaces/fields.interface';
import { useMemo } from 'react';
import { I_JsonObject } from '../interfaces/generic.interfaces';

type Props = {
    children: (parentValues: I_JsonObject, props?: I_JsonObject) => JSX.Element,
    control: Control,
} & WithDepends;

const ChildrenWrapper = ({ children, control, dependsOn, dependsOnChange }: Props) => {
    const names = typeof dependsOn === "string" ? [dependsOn] : dependsOn.map(item => item.name);
    const parentValue = useWatch({ name: names, control });

    const watcherResult = useMemo(() => {
        const result = fieldWatcher(dependsOn, parentValue);
        if (dependsOnChange) {
            const changeProps = dependsOnChange(result)
            if (changeProps) result.props = { ...(result.props || {}), ...changeProps }
        }
        return result;
    }, [dependsOn, parentValue])

    if (!watcherResult.show) return null

    return children(watcherResult.parentValue, watcherResult.props)
}

export default ChildrenWrapper;
