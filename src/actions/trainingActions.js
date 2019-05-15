export const SET_TRAINING_PACK = 'SET_TRAINING_PACK';
export const TRUE_ANSWER_REQUEST = 'TRUE_ANSWER_REQUEST';
export const TRUE_ANSWER_SUCCESS = 'TRUE_ANSWER_SUCCESS';
export const TRUE_ANSWER_FAIL = 'TRUE_ANSWER_FAIL';
export const FALSE_ANSWER_REQUEST = 'FALSE_ANSWER_REQUEST';
export const FALSE_ANSWER_SUCCESS = 'FALSE_ANSWER_SUCCESS';
export const FALSE_ANSWER_FAIL = 'FALSE_ANSWER_FAIL'

export function setTrainingPack(payload) {
    return {
        type: SET_TRAINING_PACK,
        payload: payload
    };
}

export function trueAnswerRequest(payload) {
    return {
        type: TRUE_ANSWER_REQUEST,
        payload: payload
    }
}

export function falseAnswerRequest() {
    return {
        type: FALSE_ANSWER_REQUEST,
        payload: payload
    }
}
