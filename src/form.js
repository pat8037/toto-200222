import formSchema from './formStyle.json';

function FormBuilder(props) {
    return <h1>Hello, {props.name}</h1>;
}
const element = <FormBuilder name="Form" />;

ReactDOM.render(
    element,
    document.getElementById('root')

);