/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <phk@FreeBSD.ORG> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Poul-Henning Kamp
 * ----------------------------------------------------------------------------
 */

// FUNÇÕES

function getDisciplina(turmaKey) {

  let disciplinasDisponiveis = [];
  let aulasRestantes = 0;

  // pega todas as disciplinas disponiveis com aulas restantes
  for (var i = turmas[turmaKey].disciplinas.length; i--; )
    if (turmas[turmaKey].disciplinas[i].aulasRestantes)
      disciplinasDisponiveis.push(turmas[turmaKey].disciplinas[i]);

  // se não tiver disciplina disponivel, retorna falso
  if (disciplinasDisponiveis.length) {

    // faz primeira tentativa pra pegar uma disciplina
    let randomNumber = Math.floor(Math.random() * disciplinasDisponiveis.length);
    let disciplina = disciplinasDisponiveis[randomNumber];

    return disciplina;

  } else {

    return false;

  }

}

function verificaDisponibilidadeProfessor(disciplina, diaKey, horarioKey) {

    for (var i = 0; i < turmas.length; i++) {

      if (turmas[i].diasAula[diaKey].horarios[horarioKey].disciplina)
        if (turmas[i].diasAula[diaKey].horarios[horarioKey].disciplina.professor == disciplina.professor)
          return false;

    }

  return true;

}