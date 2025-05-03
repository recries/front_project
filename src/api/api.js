// src/api/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8082/api', // Spring Boot API 서버 주소
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // 필요 시 쿠키 전송 (Spring Session 사용할 때 유용)
});

// ✅ 요청 인터셉터 (토큰 자동 추가 예시)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // 저장된 JWT 토큰
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// ✅ 응답 인터셉터 (에러 처리용)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default api;
