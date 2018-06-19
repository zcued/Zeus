import * as React from 'react';
interface Props {
    checked?: boolean;
    disabled?: boolean;
    label?: JSX.Element | string;
    onChange?: Function;
    name?: string;
    value?: string | number;
    extra?: JSX.Element | string;
    radius?: boolean;
    className?: string;
}
declare class Radio extends React.Component<Props> {
    state: {
        checked: boolean;
    };
    static getDerivedStateFromProps(nextProps: Props): {
        checked: boolean;
    };
    handleChange: (e: any) => void;
    render(): JSX.Element;
}
export default Radio;
