import { Control, useWatch } from 'react-hook-form'
import fieldWatcher from '../utils/fieldWatcher';
import { WithChildren } from '../interfaces/fields.interface';
import { useMemo } from 'react';
import { I_JsonObject } from '../interfaces/generic.interfaces';

type Props = {
    children: (parentValues: I_JsonObject, props: I_JsonObject) => JSX.Element,
    control: Control,
    dependsOn: WithChildren["dependsOn"],
}

const ChildrenWrapper = ({ children, control, dependsOn }: Props) => {
    const names = typeof dependsOn === "string" ? [dependsOn] : dependsOn.map(item => item.name);
    const parentValue = useWatch({ name: names, control });

    const watcherResult = useMemo(() => fieldWatcher(dependsOn, parentValue), [dependsOn, parentValue])

    if (!watcherResult.show) return null

    return children(watcherResult.parentValue, watcherResult.props)
}

export default ChildrenWrapper;
