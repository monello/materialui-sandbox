import MuiButton from "@mui/material/Button"

const Button = props => {
    const {
        variant,
        color,
        size,
        disabled,
        disableElevation,
        onClickHandler
    } = props;

    return (
        <MuiButton
            variant={variant}
            color={color}
            size={size}
            disabled={disabled}
            disableElevation={disableElevation}
            onClick={onClickHandler}
        >
            {props.children}
        </MuiButton>
    )
}

export default Button
