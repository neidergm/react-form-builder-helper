import DynamicForm from './components/DynamicForm';
import { InputConfig, SelectConfig, WithRequestConfig } from './interfaces/fields.interface';

const MyOwnDynamicFormMaker = DynamicForm;

export const InputComponent = (props: InputConfig) => <></>
export const SelectComponent = (props: SelectConfig) => <></>
export const SelectWithRequestComponent = (props: SelectConfig & WithRequestConfig) => <></>
export const SelectWithChildrenComponent = (props: SelectConfig) => <></>

export default MyOwnDynamicFormMaker;