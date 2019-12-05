import React, {useCallback} from 'react';

import Circle1 from 'assets/img/circle_1.png'
import Circle2 from 'assets/img/circle_3.png'
import Circle3 from 'assets/img/circle_2.png'
import Circle4 from 'assets/img/circle_4.png'
import Circle5 from 'assets/img/circle_5.png'
const BACKGROUND_IMAGES = [Circle1, Circle2, Circle3, Circle4, Circle5]

// Multiple select component for the parent Survey component
const Select = ({ index, step, state, dispatch }) => {
    // Determine if the option is selected
    const isActive = useCallback((option) => {
        const text = typeof option === 'object' ? option.text : option
        return state && state.step_values.includes(text)
    }, [state])

    // Determine which hand-drawn circle image to use for the selection
    const getSelectImage = useCallback((option, index) => {
        if (!isActive(option)) { return {} }
        const idx = index % BACKGROUND_IMAGES.length
        return { backgroundImage: `url(${BACKGROUND_IMAGES[idx]})` }
    }, [isActive])

    function onSelect(option) {
        const payload = { step_id: (index + 1), step_values: [], additional_information: (state && state.additional_information) || undefined }
        const text = typeof option === 'object' ? option.text : option
        if (step.maxSelect === 1) {
            payload.step_values = [text]
        } else {
            // Handle the removal of an item already selected
            if (isActive(option)) {
                const data = state.step_values
                data.splice(data.indexOf(text), 1)
                // Reset the data if the user has manually removed all items
                if (data.length === 0) {
                    return dispatch({ type: 'CLEAR' })
                }
                payload.step_values = data
            } else {
                // Limit selections to `maxSelect`
                if (!state || (state && state.step_values.length !== step.maxSelect)) {
                    payload.step_values = [...((state && state.step_values) || []), text]
                } else {
                    return
                }
            }
        }
        dispatch({ type: 'UPDATE', index, payload })
        if (typeof option === 'object' && option.hasTextArea) {
            dispatch({ type: 'SHOW_TEXT', index, value: payload.step_values.includes(option.text) })
        }
    }

    return (
        <React.Fragment>
            <span>{step.helperText}</span>
            <ul>
                {step.options.map((option, index) => (
                    <li key={index} className={isActive(option) ? 'active' : undefined} style={getSelectImage(option, index)}>
                        <button type="button" onClick={() => onSelect(option)}>
                            {typeof option === 'object' ? option.text : option}
                        </button>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default Select
