import {extractAuthResponse} from '../utils/authUtils';

describe('extractAuthResponse function',()=>{
    it('returns the spotify url-hash fragments correctly', () => {
        const urlWithHash = '#access_token=NwAExzBV3O2Tk&token_type=Bearer&expires_in=3600&state=123';
        expect(extractAuthResponse(urlWithHash)).toMatchObject({
            "access_token":"NwAExzBV3O2Tk",
            "token_type":"Bearer",
            "expires_in":"3600",
            "state":"123"
        });
    });
});
