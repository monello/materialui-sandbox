import MuiButton from "@mui/material/Button"

const Button = props => {
    const { variant, color, size, onClickHandler } = props;
    return (
        <MuiButton variant={variant} color={color} size={size} onClick={onClickHandler}>
            {props.children}
        </MuiButton>
    )
}

export default Button
