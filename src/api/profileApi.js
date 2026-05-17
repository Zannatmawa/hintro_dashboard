
export const getProfile = async () => {
    const res = await fetch(
        "https://mock-backend-hintro.vercel.app/api/auth/profile",
        {
            headers: {
                "x-user-id": "u2",
            },
        }
    );

    return res.json();
};