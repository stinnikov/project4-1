import { create } from 'zustand';

interface LoginStore {
    step: number;
    completeStep: () => void;
    goBack: () => void;
}

const useLoginStore = create<LoginStore>((set) => ({
    step: 0,
    completeStep: () =>
        set((state) => {
            const newStep = Math.min(state.step + 1, 2);
            //console.log(newStep); // Логирование текущего шага после завершения
            return { step: newStep };
        }),
    goBack: () =>
        set((state) => {
            const newStep = Math.max(state.step - 1, 0);
            //console.log(newStep); // Логирование текущего шага после возврата
            return { step: newStep };
        }),
}));

export default useLoginStore;
