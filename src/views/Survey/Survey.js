import React, {useState, useEffect} from 'react'
import Survey, { SURVEY_QUESTIONS } from 'components/Survey'

const Home = () => {
    // Pull down the surveyId to use
    const [surveyId, setSurveyId] = useState(null)
    useEffect(() => {
        try {
            async function getSurveyId() {
                const response = await fetch('https://api.symbiome.co/api/v1/surveys?source=postgres')
                if (response.status === 200) {
                    const {surveys} = await response.json()
                    if (surveys && surveys.length > 0) {
                        const targets = surveys.filter(x => x.name === 'Signup Survey')
                        if (targets.length === 1) { setSurveyId(targets[0].source_id) }
                    }
                }
            }
            getSurveyId()
        } catch (error) {}
    }, [])

    return (
        <>
            {surveyId && <Survey surveyId={surveyId} questions={SURVEY_QUESTIONS} />}
        </>
    )
}

export default Home
