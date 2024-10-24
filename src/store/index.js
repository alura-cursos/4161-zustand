import { create } from "zustand";

export const MODO_CRONOMETRO = {
  FOCO: {
    id: "foco",
    nome: "Foco",
    frase: ["Otimize sua produtividade,", "mergulhe no que importa."],
    tempoInicialEmSegundos: 30,
  },
  DESCANSO_CURTO: {
    id: "descanso-curto",
    nome: "Descanso curto",
    frase: ["Que tal dar uma respirada?", "Faça uma pausa curta."],
    tempoInicialEmSegundos: 5,
  },
  DESCANSO_LONGO: {
    id: "descanso-longo",
    nome: "Descanso longo",
    frase: ["Hora de voltar à superfície.", "Faça uma pausa longa."],
    tempoInicialEmSegundos: 15,
  },
};

export const useCronometroStore = create((set) => ({
  modoCronometro: MODO_CRONOMETRO.FOCO,
  tempoEmSegundos: MODO_CRONOMETRO.FOCO.tempoInicialEmSegundos,

  setModoCronometro: (novoModo) => {
    set({
      modoCronometro: novoModo,
      tempoEmSegundos: novoModo.tempoInicialEmSegundos,
    });
  },

  intervaloId: null,

  iniciarCronometro: () => {
    const novoId = setInterval(computarContagemRegressiva, 1000);

    set({ intervaloId: novoId });
  },
}));

function computarContagemRegressiva() {
  const tempoAtual = useCronometroStore.getState().tempoEmSegundos;

  if (tempoAtual > 0) {
    decrementarTempo();
  } else {
    redefinirTempo();
  }
}

function decrementarTempo() {
  useCronometroStore.setState((estado) => ({ tempoEmSegundos: estado.tempoEmSegundos - 1 }));
}

function redefinirTempo() {
  useCronometroStore.setState((estado) => ({
    tempoEmSegundos: estado.modoCronometro.tempoInicialEmSegundos,
  }));
}
