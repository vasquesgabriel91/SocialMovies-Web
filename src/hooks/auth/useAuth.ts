"use client";

import { useState } from "react";
import { authService } from "../../services/auth/authService";
import { AuthRequest, AuthResponse } from "../../types/auth";

export const useAuth = () => {
    const [user, setUser] = useState<AuthResponse["user"] | null>(null);
    const [loading, setLoading] = useState(false);

    async function login(data: AuthRequest) {
        setLoading(true);
        try {
            const response = await authService.login(data);
            setUser(response.user);
            localStorage.setItem("token", response.token);

        } finally {
            setLoading(false);
        }
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("token");
    }
    return { user, login, logout, loading };
};