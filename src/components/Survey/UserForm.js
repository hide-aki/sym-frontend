import React from 'react'
import {Form, FormGroup, Input, FormText, Col} from 'reactstrap'
import DatePicker from 'react-datepicker'
import Select from 'react-select'

const UserForm = ({ index, state, dispatch }) => {
    function handleChange(field, value) {
        dispatch({ type: 'UPDATE', index, payload: { ...state, [field]: value } })
    }

    return (
        <Form>
            <FormGroup row>
                <Col md={6}>
                    <Input type="text" placeholder="Email address *" value={state && state.email ? state.email : ''} onChange={event => handleChange('email', event.target.value)} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={6}>
                    <Input type="text" placeholder="First name *" value={state && state.first_name ? state.first_name : ''} onChange={event => handleChange('first_name', event.target.value)} />
                </Col>
                <Col md={6}>
                    <Input type="text" placeholder="Last name *" value={state && state.last_name ? state.last_name : ''} onChange={event => handleChange('last_name', event.target.value)} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={6}>
                    <Input type="text" placeholder="Mobile phone" value={state && state.phone ? state.phone : ''}
                        onChange={event => handleChange('phone', event.target.value)} />
                </Col>
                <Col md={6}>
                    <FormText>
                        This is so we can text you important product updates and trial information.
                        Numbers only.
                    </FormText>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={6}>
                    <Input type="text" placeholder="Instagram handle" value={state && state.instagram ? state.instagram : ''} onChange={event => handleChange('instagram', event.target.value)} />
                </Col>
                <Col md={6}>
                    <FormText>
                        This is so we can invite you to exclusive Instagram DM and Close Friends groups
                    </FormText>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={6}>
                    <DatePicker
                        selected={state && state.birthday}
                        onSelect={date => handleChange('birthday', date)}
                        dateFormat="MM/dd/yy"
                        placeholderText="When's your birthday? *"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        maxDate={new Date()}
                        popperModifiers={{
                            preventOverflow: {
                                enabled: true,
                                escapeWithReference: false,
                                boundariesElement: 'scrollParent'
                            }
                        }}
                    />
                </Col>
                <Col md={6}>
                    <FormText>
                        MM / DD / YY
                    </FormText>
                </Col>
            </FormGroup>
            {/* Select */}
            <FormGroup row>
                <Col md={6}>
                    <Select
                        placeholder="How did you hear about us? *"
                        className="survey-select-container"
                        classNamePrefix="survey-select"
                        isSearchable={false}
                        menuPlacement="top"
                        onChange={({value}) => handleChange('signup_referer', value)}
                        value={state && state.signup_referer ? { value: state.signup_referer, label: state.signup_referer } : null}
                        options={[
                            {value: 'Instagram', label: 'Instagram'},
                            {value: 'Facebook', label: 'Facebook'},
                            {value: 'Social media influencer', label: 'Social media influencer'},
                            {value: 'Reddit', label: 'Reddit'},
                            {value: 'Someone from the brand contacted me', label: 'Someone from the brand contacted me'},
                            {value: 'Other', label: 'Other'}
                        ]}
                    />
                </Col>
            </FormGroup>
        </Form>
    )
}

export default UserForm
