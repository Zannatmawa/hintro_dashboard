

export const getCallStats = async () => {
    const res = await fetch(
        "https://mock-backend-hintro.vercel.app/api/call-sessions/stats",
        {
            headers: {
                "x-user-id": "u2",
            },
        }
    );

    return res.json();
};