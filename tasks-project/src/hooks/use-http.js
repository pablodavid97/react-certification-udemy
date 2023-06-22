import React, { useState, useCallback } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, processData) => {
        console.log('request: ', requestConfig);
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body
                    ? JSON.stringify(requestConfig.body)
                    : null,
            });

            console.log('response: ', response);

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            processData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
