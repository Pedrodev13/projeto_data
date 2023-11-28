AOS.init();

const dataDoAniversario = new Date("Oct 11, 2024 10:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaDoAniversaio = timeStampDoAniversario - timeStampAgora;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const anoEmMs = 1000 * 60 * 60 * 24 * 31 * 365;
    const mesEmMs = 1000 * 60 * 60 * 24 * 31;

    const mesesAteOAniversaio = Math.floor((distanciaDoAniversaio % anoEmMs) / mesEmMs);
    const diasAteOAniversario = Math.floor(distanciaDoAniversaio / diaEmMs);
    const horasAteOAniversario = Math.floor((distanciaDoAniversaio % diaEmMs) / horasEmMs );
    const minutosAteOAniversario = Math.floor((distanciaDoAniversaio % horasEmMs) / minutosEmMs);
    const segundosAteOAniversario = Math.floor((distanciaDoAniversaio % minutosEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${mesesAteOAniversaio} meses ${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`

    if(distanciaDoAniversaio < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = "Já passou..."
    }

    // console.log(mesesAteOAniversaio);
    // console.log(diasAteOAniversario);
    // console.log(horasAteOAniversario);
    // console.log(minutosAteOAniversario);
    // console.log(segundosAteOAniversario);

}, 1000);