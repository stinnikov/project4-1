import { create } from 'zustand';

interface LoginStore {
    inputPhoneNumber: string | undefined;
    step: number;
    error: string | undefined;
    setInputPhoneNumber: (phoneNumber: string) => void;
    completeStep: () => void;
    goBack: () => void;
    validatePhoneNumber: (phoneNumber: string) => boolean; // Новый метод
}

const useLoginStore = create<LoginStore>((set) => ({
    inputPhoneNumber: undefined,
    step: 0,
    error: undefined,
    setInputPhoneNumber: (phoneNumber: string) => {
        const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber); // Очищаем номер телефона
        set((state) => {
            return {
                inputPhoneNumber: cleanedPhoneNumber
            }
        });
    },
    completeStep: () => set((state) => {
        const newStep = Math.min(state.step + 1, 2);
        return { step: newStep };
    }),
    goBack: () => set((state) => {
        const newStep = Math.max(state.step - 1, 0);
        return { step: newStep };
    }),
    validatePhoneNumber: (phoneNumber: string) => {
        let error: string = '';
        const isValid = /^\d{11}$/.test(phoneNumber); // Проверяем, что номер состоит из 11 цифр
        if (!isValid) {
            error = "Ошибка: номер телефона должен состоять из 11 цифр.";
            set((state) => {
                return { error: error }
            })
        }
        else {
            set((state) => {
                return { error: undefined }
            })
        }
        return isValid; // Возвращаем результат проверки
    },
}));

// Функция для очистки номера телефона
const cleanPhoneNumber = (phoneNumber: string): string => {
    return phoneNumber.replace(/[^\d]/g, ''); // Убираем все, кроме цифр
};

export default useLoginStore;
