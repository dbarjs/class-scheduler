/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <phk@FreeBSD.ORG> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Poul-Henning Kamp
 * ----------------------------------------------------------------------------
 */

// OBJETOS

var turmas = [];

var nomeTurma = '1 ano';
// 1º ano
turmas.push({
  nomeTurma: '1 ano',
  disciplinas: [
    {
      nomeDisciplina: 'Lógica Matemática',
      professor: 'prof lorem 1',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Fundamentos de Sistemas de Informação',
      professor: 'prof lorem 2',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Programação I',
      professor: 'prof lorem 3',
      ano: nomeTurma,
      isLab: true,
      aulaSemana: 6,
      aulasRestantes: 6
    },
    {
      nomeDisciplina: 'Psicologia da Educação',
      professor: 'prof lorem 4',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Matemática Discreta',
      professor: 'prof lorem 5',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Relações Humanas',
      professor: 'prof lorem 6',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Didática Geral',
      professor: 'prof lorem 7',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Arquitetura de Computadores',
      professor: 'prof lorem 8',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Teoria Geral dos Sistemas',
      professor: 'prof lorem 9',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
  ],
  diasAula: [
    {
      nomeDia: "seg",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: null},
        {nomeHorario: 'Horario B', disciplina: null}
      ]
    },
    {
      nomeDia: "ter",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: null},
        {nomeHorario: 'Horario B', disciplina: null}
      ]
    },
    {
      nomeDia: "qua",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: null},
        {nomeHorario: 'Horario B', disciplina: null}
      ]
    },
    {
      nomeDia: "qui",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: null},
        {nomeHorario: 'Horario B', disciplina: null}
      ]
    },
    {
      nomeDia: "sex",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: null},
        {nomeHorario: 'Horario B', disciplina: null}
      ]
    },
    {
      nomeDia: "sab",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: null}
      ]
    },

  ]
});

var nomeTurma = '2 ano';

turmas.push({
  nomeTurma: '2 ano',
  disciplinas: [
    {
      nomeDisciplina: 'Lógica Matemática',
      professor: 'prof lorem 1',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Fundamentos de Sistemas de Informação',
      professor: 'prof lorem 2',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Programação I',
      professor: 'prof lorem 3',
      ano: nomeTurma,
      isLab: true,
      aulaSemana: 6,
      aulasRestantes: 6
    },
    {
      nomeDisciplina: 'Psicologia da Educação',
      professor: 'prof lorem 4',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Matemática Discreta',
      professor: 'prof lorem 5',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 4
    },
    {
      nomeDisciplina: 'Relações Humanas',
      professor: 'prof lorem 6',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Didática Geral',
      professor: 'prof lorem 7',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Arquitetura de Computadores',
      professor: 'prof lorem 8',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
    {
      nomeDisciplina: 'Teoria Geral dos Sistemas',
      professor: 'prof lorem 9',
      ano: nomeTurma,
      isLab: false,
      aulaSemana: 2,
      aulasRestantes: 2
    },
  ],
  diasAula: [
    {
      nomeDia: "seg",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: null},
        {nomeHorario: 'Horario B', disciplina: null}
      ]
    },
    {
      nomeDia: "ter",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: null},
        {nomeHorario: 'Horario B', disciplina: null}
      ]
    },
    {
      nomeDia: "qua",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: null},
        {nomeHorario: 'Horario B', disciplina: null}
      ]
    },
    {
      nomeDia: "qui",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: null},
        {nomeHorario: 'Horario B', disciplina: null}
      ]
    },
    {
      nomeDia: "sex",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: null},
        {nomeHorario: 'Horario B', disciplina: null}
      ]
    },
    {
      nomeDia: "sab",
      horarios: [
        {nomeHorario: 'Horario A', disciplina: {
          nomeDisciplina: 'PA'
        }}
      ]
    },

  ]
});