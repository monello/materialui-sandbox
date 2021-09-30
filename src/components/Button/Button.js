import MuiButton from "@mui/material/Button"

const Button = props => {
    const {
        variant,
        color,
        size,
        disabled,
        disableElevation,
        startIcon,
        endIcon,
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
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {props.children}
        </MuiButton>
    )
}

export default Button
