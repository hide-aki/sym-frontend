import React from 'react'
import { IoMdArrowForward, IoMdArrowBack, IoMdClose } from "react-icons/io";

// Action buttons on each survey slide
const SurveyActions = ({ dispatch, onSubmit, canGoBack, canClear, canGoNext, isLastPage, clearText }) => {
  return (
      <div className="survey__right--actions">
          <button type="button" disabled={!canGoBack} onClick={() => dispatch({ type: 'BACK' })}>
              <IoMdArrowBack size="16" />
              Back
          </button>

          <button type="button" disabled={!canClear} onClick={() => dispatch({ type: 'CLEAR' })}>
              <IoMdClose size="16" />
              {clearText}
          </button>

          {!isLastPage ? (
              <button type="button" disabled={!canGoNext} onClick={() => dispatch({ type: 'NEXT' })}>
                  Next
                  <IoMdArrowForward size="16" />
              </button>
          ) : (
              <button type="button" disabled={!canGoNext} onClick={onSubmit}>
                  Submit
              </button>
          )}
      </div>
  )
}

export default SurveyActions
