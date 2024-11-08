AOS.init();

//quando o evento iniciara primeiro: mês dia ano tempo
const dataDoEvento = new Date("Dec 12, 2024, 19:00:00")
//vamos pegar o de agora
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function() {
    const agora = new Date()
    const timeStampAgora = agora.getTime()

    const diasEvento = 1000 * 60 * 60 * 24;
    const horasEventos = 1000 * 60 * 60;
    const minutosEvento = 1000 * 60;
    const segundosEvento = 1000

    const distaciaAteEvento = timeStampDoEvento - timeStampAgora

    const diasAteEvento = Math.floor(distaciaAteEvento / diasEvento)
    const horasDoEvento = Math.floor(distaciaAteEvento % diasEvento / horasEventos)
    const minutosDoEvento = Math.floor(distaciaAteEvento % horasEventos / minutosEvento)
    const segundosDoEvento = Math.floor(distaciaAteEvento % minutosEvento / segundosEvento)

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasDoEvento}h ${minutosDoEvento}m ${segundosDoEvento}s`

    if (distaciaAteEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = `Evento expirado`
    }
}, 1000)