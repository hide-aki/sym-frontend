import React, {useReducer, useRef, useEffect, useMemo} from 'react'
import {Carousel, CarouselItem, Row, Col, Input} from 'reactstrap'
import {IoMdArrowDown} from 'react-icons/io'
import {uuidv4} from 'utils/uuid'
import SurveyActions from './SurveyActions'
import Select from './Select'
import UserForm from './UserForm'

// Component for the survey slide
const SurveyStep = ({ index, step, state, dispatch }) => {
    const sentinelRef = useRef(null)
    const observerRef = useRef(null)
    const Component = step.isUserForm ? UserForm : Select

    // Handles observation of the sentinel so we can know when scrolling is possible
    useEffect(() => {
        if (state.currentStep !== index) { return }

        if (observerRef.current === null) {
            observerRef.current = new IntersectionObserver(([entry]) => {
                if (entry) {
                    dispatch({ type: 'SCROLLING', index, value: !entry.isIntersecting })
                }
            })
        }
        const observer = observerRef.current
        observer.observe(sentinelRef.current)
        return () => observer.disconnect()
    }, [state.currentStep, index, dispatch])

    return (
        <div className="survey__right--content">
            {/* Dynamic component for this specific survey step. See `SURVEY_STEPS` */}
            <Component
                index={index}
                step={step}
                state={state.data[index]}
                dispatch={dispatch}
            />
            {/* We use the sentinel to determine if the content is scrollable
                and if it has been scrolled to the bottom */}
            <div ref={sentinelRef} className="survey__sentinel" />
        </div>
    )
}

const Survey = React.memo(({ surveyId, questions }) => {
    // Survey state reducer
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'NEXT':
                return {...state, currentStep: (state.currentStep + 1) === questions.length ? state.currentStep : state.currentStep + 1}
            case 'BACK':
                return {...state, currentStep: state.currentStep === 0 ? state.currentStep : state.currentStep - 1}
            case 'UPDATE':
                return {...state, data: {...state.data, [action.index]: action.payload}}
            case 'CLEAR':
                const data = state.data
                delete data[state.currentStep]
                return {...state, data}
            case 'SCROLLING':
                return {...state, scrollable: {...state.scrollable, [action.index]: action.value}}
            case 'SHOW_TEXT':
                return {...state, showTextArea: { ...state.showTextArea, [action.index]: action.value}}
            case 'SUBMITTING':
                return {...state, isSubmitting: action.value}
            case 'CONFIRMED':
                return {
                    ...state,
                    isSubmitting: false,
                    isConfirmed: true,
                    confirmationCode: action.uuid,
                    firstName: action.name,
                    email: action.email
                }
            default:
                return state
        }
    }, {
        currentStep: 0, // Current slide
        scrollable: {}, // Whether the slide is scrollable or not
        data: {}, // The state for each slide
        showTextArea: {}, // Whether a slide has a textarea visible or not
        isSubmitting: false, // Whether we are submitting to the API
        isConfirmed: false, // If the API request was accepted
        confirmationCode: null,
        firstName: null,
        email: null
    })

    // Get the current survey step information
    const currentState = state.data[state.currentStep]
    const currentStep = questions[state.currentStep]
    const textAreaOptionValue = useMemo(() => (currentStep.options || []).filter(x => typeof x === 'object' && x.hasTextArea), [currentStep])

    // Handle submission of the survey (the final step)
    async function onSubmit() {
        // Don't allow multiple requests
        if (state.isSubmitting) { return }
        dispatch({ type: 'SUBMITTING', value: true })

        // Extract user data (final step in the list)
        const data = Object.assign({}, state.data)
        const user = data[questions.length - 1]
        delete data[questions.length - 1]

        // Create user
        let response = await fetch('https://api.symbiome.co/api/v1/users', {
            method: 'POST',
            body: JSON.stringify({
                email: user.email,
                uuid: uuidv4(),
                data: {
                    birthdate: user.birthday.toJSON().split('T')[0],
                    first_name: user.first_name,
                    last_name: user.last_name,
                    instagram_id: user.instagram,
                    mobile_phone: user.phone,
                    signup_referer: user.signup_referer
                }
            })
        })
        if (response.status >= 400) {
            console.debug('Response Status:', response.status)
            console.debug('Response Text:', await response.text())
            dispatch({ type: 'SUBMITTING', value: false })
            return window.alert('There was an issue submitting the survey.')
        }

        // Create survey responses
        const params = { responses: [] }
        Object.keys(data).forEach(key => {
            // Merge in any `additional_information` added from a survey step
            const current = Object.assign({}, data[key])
            if (current.additional_information) {
                const { key: optionKey, value: optionValue } = current.additional_information
                current.step_values = [...current.step_values]
                current.step_values[current.step_values.indexOf(optionKey)] = `${optionKey} - ${optionValue}`
            }
            params.responses.push({
                step_id: current.step_id,
                step_values: current.step_values
            })
        })

        const surveyUuid = uuidv4()
        response = await fetch(`https://api.symbiome.co/api/v1/surveys/${surveyId}/responses`, {
            method: 'POST',
            body: JSON.stringify({
                user_email: user.email,
                response_at: new Date().toJSON(),
                response_id: surveyUuid,
                ...params
            })
        })
        if (response.status >= 400) {
            console.debug('Response Status:', response.status)
            console.debug('Response Text:', await response.text())
            dispatch({ type: 'SUBMITTING', value: false })
            return window.alert('There was an issue submitting the survey.')
        }

        // Navigate to the confirmation page.
        dispatch({ type: 'CONFIRMED', uuid: surveyUuid, name: user.first_name, email: user.email })
    }

    // Handle text input on the textarea
    function onChange(key, event) {
        dispatch({type: 'UPDATE', index: state.currentStep, payload: {
            ...currentState,
            additional_information: {key, value: event.target.value}
        }})
    }

    return (
        <React.Fragment>
            {state.isConfirmed ?
                (
                    <Row className="survey">
                        <Col md="5" className="survey__left">
                            <h1 className="survey__left--title">Welcome to the Symbiome community, {state.firstName}!</h1>
                            <div className="survey__left--meta">
                                <p>{state.email}</p>
                                <p>Confirmation number #{state.confirmationCode}</p>
                            </div>
                        </Col>
                        <Col md="7" className="survey__right survey__right--confirm">
                            <p class="survey__right--confirm--header">
                                Thank you for entrusting us with this information. An email was sent to the address your provided confirming the information you gave us, your account details, our privacy policy, and next steps.
                            </p>
                            <p class="survey__right--confirm--footer">
                                In the meantime please visit our <a href="#">Instagram</a> or <a href="#">subscribe to our newsletter</a> to stay up to date with secret DM groups, exclusive events, and more.
                            </p>
                        </Col>
                    </Row>
                ) :
                (
                    <Row className="survey">
                        {/* Left side (This is outside the carousel) */}
                        <Col md="5" className="survey__left" style={{ backgroundImage: `url(${currentStep.backgroundImage})` }}>
                            <span className="survey__left--step">{state.currentStep + 1}/{questions.length}</span>
                            <h1 className="survey__left--title">{currentStep.questionText}</h1>
                            <p className="survey__left--footer">Complete the survey and get up to 6 months of free, bespoke skincare</p>
                        </Col>

                        {/* Right side */}
                        <Col md="7" className="survey__right">
                            {/* Content */}
                            <Carousel
                                activeIndex={state.currentStep}
                                next={() => {}}
                                previous={() => {}}
                                keyboard={false}
                                pause={false}
                                interval={false}
                            >
                                {/* Survey slide */}
                                {questions.map((step, index) => (
                                    <CarouselItem key={index}>
                                        <SurveyStep
                                            index={index}
                                            step={step}
                                            state={state}
                                            dispatch={dispatch}
                                        />
                                    </CarouselItem>
                                ))}
                            </Carousel>

                            {/* Scroll Notifier */}
                            {state.scrollable[state.currentStep] && (
                                <div className="survey__right--scroll">
                                    Scroll for more
                                    <IoMdArrowDown size="16" />
                                </div>
                            )}

                            {/* Textarea */}
                            {state.showTextArea[state.currentStep] && (
                                <div class="survey__right--textarea">
                                    <Input
                                        type="textarea"
                                        placeholder="Tell us more..."
                                        value={currentState && currentState.additional_information ? currentState.additional_information.value : ''}
                                        onChange={event => onChange(textAreaOptionValue[0].text, event)}
                                    />
                                </div>
                            )}

                            {/* Actions */}
                            <SurveyActions
                                dispatch={dispatch}
                                canGoBack={state.currentStep > 0}
                                canGoNext={currentStep.isValid ? currentStep.isValid(currentState) : currentState && currentState.step_values.length > 0}
                                canClear={currentState !== undefined}
                                clearText={currentStep.clearText || 'Clear selection'}
                                isLastPage={(state.currentStep + 1) === questions.length}
                                onSubmit={onSubmit}
                            />
                        </Col>
                    </Row>
                )
            }
        </React.Fragment>
    )
})

export default Survey
