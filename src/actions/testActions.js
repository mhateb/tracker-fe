export const TEST_INIT = 'TEST_INIT';

export function testInit(payload) {
    return {
        type: TEST_INIT,
        payload: payload
    };
}
