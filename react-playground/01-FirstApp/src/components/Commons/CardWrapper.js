import './CardWrapper.css'

const CardWrapper = ( props ) => {
    const classes = 'card-wrapper ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default CardWrapper;