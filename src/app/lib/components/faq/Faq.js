import './Faq.css';

export default function Faq(props){

    let content = props.data;

    return(
        <>
        {content.title}
        </>
    )
}