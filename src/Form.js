import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [message, setMessage] = useState('');
    const apiGatewayUrl = 'https://<API_GATEWAY_ID>.execute-api.<REGION>.amazonaws.com/<STAGE>/enqueue';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(apiGatewayUrl, { message });
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Message:
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </label>
            <button type="submit">Send</button>
        </form>
    );
};

export default Form;

