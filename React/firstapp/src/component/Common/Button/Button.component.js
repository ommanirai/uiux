export const Button = (props) => {
    // console.log(props)
    var disabledLabel = props.disabledLabel || "Submitting..."
    var enabledLabel = props.enabledLabel || "Submit"
    const btn = props.isSubmitting
        ? <button disabled >{disabledLabel}</button>
        : <button disabled={!props.isValidForm} >{enabledLabel}</button>
    return btn
}