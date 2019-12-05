import Survey from './Survey'

import q1 from 'assets/img/q1.png'
import q2 from 'assets/img/q2.png'
import q3 from 'assets/img/q3.png'
import q4 from 'assets/img/q4.png'
import q5 from 'assets/img/q5.png'
import q6 from 'assets/img/q6.png'
import q7 from 'assets/img/q7.png'
import q8 from 'assets/img/q8.png'
import q9 from 'assets/img/q9.png'

// Preload the images, so they don't have to load when we swap scenes
[q1, q2, q3, q4, q5, q6, q7, q8, q9].forEach(image => {
    const instance = new Image()
    instance.src = image
})

// Survey structure. Each object is a question within the survey.
export const SURVEY_QUESTIONS = [
    {
        questionText: 'How do you feel about your skin?',
        helperText: 'Please select one',
        backgroundImage: q1,
        maxSelect: 1,
        options: [
            'Love it!',
            'Pretty good!',
            "It's alright",
            'Could be better',
            'Really hate it!'
        ]
    },
    {
        questionText: 'How do you feel about your health?',
        helperText: 'Please select one',
        backgroundImage: q2,
        maxSelect: 1,
        options: [
            "I'm the boss!",
            'Pretty good',
            'Balanced',
            'Could be better',
            'Please send help!'
        ]
    },
    {
        questionText: "What's your skin type?",
        helperText: 'Please select one',
        backgroundImage: q3,
        maxSelect: 1,
        options: [
            'Very dry',
            'Somewhat dry',
            'Combination',
            'Somewhat oily',
            'Very oily'
        ]
    },
    {
        questionText: 'Tell us about your skin.',
        helperText: 'Do any of these bother you? select all that apply',
        backgroundImage: q4,
        maxSelect: Infinity,
        options: [
            'Blemishes',
            'Texture',
            'Clogged pores',
            'Fine lines / Wrinkles',
            'Firmness',
            'Pore size',
            'Tone / Evenness',
            'Dryness',
            'Pigmentation / dark spots',
            'Redness / sensitivity',
            'Dullness',
            'Nothing',
        ]
    },
    {
        questionText: 'Do you suffer from any of the following?',
        helperText: 'Please select all that apply',
        backgroundImage: q5,
        maxSelect: Infinity,
        options: [
            'Acne',
            'Eczema',
            'Melasma',
            'Rosacea',
            'Nothing',
        ]
    },
    {
        questionText: 'Which products do you use on a regular basis?',
        helperText: 'Please select all that apply',
        backgroundImage: q6,
        maxSelect: Infinity,
        options: [
            'Oil',
            'Toner',
            'Cleanser',
            'Moisturizer',
            'Eye cream',
            'Essence',
            'Serum',
            'Masks',
            'Exfoliator',
            'None',
            { text: 'Other', hasTextArea: true }
        ]
    },
    {
        questionText: 'Which factors most influence your skincare purchases?',
        helperText: 'Select up to 3',
        backgroundImage: q7,
        maxSelect: 3,
        options: [
            'Price',
            'Value',
            'Ingredients',
            'Vegan / Cruelty-free',
            'Natural / Clean',
            'Efficacy',
            'Advertisements',
            'Recommendations',
            'Sustainability'
        ]
    },
    {
        questionText: 'With which gender do you identify?',
        helperText: 'Please select one',
        backgroundImage: q8,
        maxSelect: 1,
        options: [
            'Male',
            'Female',
            'Non-binary'
        ]
    },
    // User Form -- This technically isn't a question, but it's used here to make the implementation
    // less complicated
    {
        isUserForm: true,
        questionText: 'Tell us about yourself.',
        backgroundImage: q9,
        clearText: 'Clear answers',
        isValid: (state) => {
            if (!state) { return false }
            // Validate that email is correctly formatted
            const isEmailValid = /^[^,;@ \r\n]+@[^,@; \r\n]+\.[^,@; \r\n]+$/.test(state.email)
            // Validate phone number (digits only) if it is included
            const isPhoneValid = state.phone ? /^\d+$/.test(state.phone) : true
            // All required fields are filled in
            return isEmailValid
                && state.first_name
                && state.last_name
                && isPhoneValid
                && state.birthday
                && state.signup_referer
        }
    }
]

export default Survey
