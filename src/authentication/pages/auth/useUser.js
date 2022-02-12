import { useState, useEffect } from 'react';
import { useToken } from './useToken';
import { Base64 } from 'js-base64';

export const useUser = () => {
    const [token] = useToken();
    
    const getPayloadFromToken = token => {
        const encodedPayload = token.split('.')[1];

        return JSON.parse(Base64.atob(encodedPayload));
    };

    const [user, setUser] = useState(() => {
        if (!token || token === "undefined") {
            return null;
        }

        return getPayloadFromToken(token);
    });

    useEffect(() => {
        if (!token || token === "undefined") {
            setUser(null);
        } else {
            setUser(getPayloadFromToken(token));
        }
    }, [token]);

    return user;
}