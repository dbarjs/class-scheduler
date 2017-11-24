/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <phk@FreeBSD.ORG> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   Poul-Henning Kamp
 * ----------------------------------------------------------------------------
 */

// MAIN

for (var i = 0; i < turmas.length; i++) { // passa em todas as turmas

  for (var j = 0; j < turmas[i].diasAula.length; j++) { // passa em todos os dias da semana

    for (var k = 0; k < turmas[i].diasAula[j].horarios.length; k++) { // passa em todos os horarios cadastros

      // verifica o horário (isso permite adicionar uma aula fixa a algum horário, como nos sábados)
      if (!turmas[i].diasAula[j].horarios[k].disciplina) {

        let disciplinaDisponivel = false;
        let disciplina = getDisciplina(i);

        if (disciplina) {

          let tentativas = 0;

          do {

            disciplina = getDisciplina(i);

            if (verificaDisponibilidadeProfessor(disciplina, j, k)) {

              disciplinaDisponivel = true;

              // adiciona disciplina no horário
              turmas[i].diasAula[j].horarios[k].disciplina = disciplina;
              // remove 2 aulas da disciplina
              turmas[i].diasAula[j].horarios[k].disciplina.aulasRestantes = turmas[i].diasAula[j].horarios[k].disciplina.aulasRestantes - 2;

            }

            if (++tentativas > 500) {

              // infelizmente podem acontecer imcompatibilidades com professores, sendo impossível encaixa-los a grade
              console.log('incompatibilidade de professores, tente novamente');
              break;

            }

          } while (!disciplinaDisponivel);

        } else {

          console.log('não foram encontradas mais disciplinas para adicionar a grade');
          break;

        }

      }

    }

  }

}

// saida
for (var i = 0; i < turmas.length; i++) {

  console.log(turmas[i].diasAula);

}