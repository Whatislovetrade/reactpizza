// import classNames from "classnames"

const Button = (props) => {
    return (
        <button className={classNames('button', {
            'button--outline': props.outline
        })}>
            {props.children}
        </button>
    )
}